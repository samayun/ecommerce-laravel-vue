(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Admin-Products-View-:id"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/view.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/pages/view.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "viewProduct",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("productsStoreIndex", ['viewProductData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("brandsStoreIndex", ['getAllBrand'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("brandsStoreIndex", ['getBrands'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("productsStoreIndex", ['getToViewSingleProduct', 'HANDLE_VIEW'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("productsStoreIndex", ['TOGGLE_MODAL'])),
  created: function created() {
    var existProId = this.$store.state.productsStoreIndex.viewProductData.id;
    var id = this.$route.params.id;

    if (existProId != id) {
      this.getToViewSingleProduct(id);
      document.title = 'View Products';
    }

    this.token = window.Laravel.csrfToken;

    if (this.getAllBrand.length == 0) {
      this.getBrands();
    }

    var _this = this;

    $Bus.$on('cleareditedFiles', function () {
      _this.$refs.upload.clearFiles();
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/pages/view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.product-gallery-vertical .product-image-gallery[data-v-5ac96c85], .product-gallery-vertical .product-main-image[data-v-5ac96c85] {\n    width: 100%;\n}\n.product-main-image[data-v-5ac96c85] {\n    position: relative;\n    margin-bottom: 1rem;\n}\nfigure[data-v-5ac96c85] {\n    margin: 0 0 1rem;\n        margin-bottom: 1rem;\n}\narticle[data-v-5ac96c85], aside[data-v-5ac96c85], figcaption[data-v-5ac96c85], figure[data-v-5ac96c85], footer[data-v-5ac96c85], header[data-v-5ac96c85], hgroup[data-v-5ac96c85], main[data-v-5ac96c85], nav[data-v-5ac96c85], section[data-v-5ac96c85] {\n    display: block;\n}\n.product-main-image img[data-v-5ac96c85] {\n    max-width: none;\n    width: 100%;\n}\nimg[data-v-5ac96c85] {\n    display: block;\n    max-width: 100%;\n    height: auto;\n}\nimg[data-v-5ac96c85] {\n    vertical-align: middle;\n    border-style: none;\n}\n.btn-product-gallery[data-v-5ac96c85] {\n    position: absolute;\n    right: 2rem;\n    bottom: 2rem;\n    z-index: 49;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    width: 4rem;\n    height: 4rem;\n    color: #777;\n    font-weight: normal;\n    font-size: 2rem;\n    line-height: 1;\n    background-color: #fff;\n    box-shadow: 2px 6px 16px rgba(51,51,51,0.05);\n    transition: all .35s ease;\n}\na[data-v-5ac96c85] {\n    font-family: 'Poppins';\n}\n.product-gallery-vertical .product-image-gallery[data-v-5ac96c85] {\n    width: calc( 100% + 10px );\n}\n.product-gallery-vertical .product-image-gallery[data-v-5ac96c85], .product-gallery-vertical .product-main-image[data-v-5ac96c85] {\n    width: 100%;\n}\n.product-image-gallery[data-v-5ac96c85] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-left: -.5rem;\n    margin-right: -.5rem;\n}\n.product-gallery-item[data-v-5ac96c85] {\n    position: relative;\n    display: block;\n    flex: 0 0 25%;\n    max-width: 25%;\n    padding-left: .5rem;\n    padding-right: .5rem;\n    margin-bottom: 1rem;\n}\na[data-v-5ac96c85] {\n    font-family: 'Poppins';\n}\na[data-v-5ac96c85] {\n    color: #c96;\n    text-decoration: none;\n    transition: color 0.3s ease;\n}\n.product-gallery-item img[data-v-5ac96c85] {\n    max-width: none;\n    width: 100%;\n}\nimg[data-v-5ac96c85] {\n    display: block;\n    max-width: 100%;\n    height: auto;\n}\nimg[data-v-5ac96c85] {\n    vertical-align: middle;\n    border-style: none;\n}\n.btn-product-gallery[data-v-d614fb76][data-v-5ac96c85] {\n    text-align: center;\n    color: #777;\n    font-weight: normal;\n    font-size: 2rem;\n    line-height: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/pages/view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/view.vue?vue&type=template&id=5ac96c85&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/pages/view.vue?vue&type=template&id=5ac96c85&scoped=true& ***!
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
  return _c("main", { staticClass: "app-content", attrs: { id: "app" } }, [
    _c("div", { staticClass: "app-title" }, [
      _c("div", [
        _c("h1", [
          _c("i", { staticClass: "fa fa-cogs" }),
          _vm._v(" " + _vm._s(_vm.$t("products.edit")))
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "page-content card p-2" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "product-details-top" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "div",
                { staticClass: "product-gallery product-gallery-vertical" },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("figure", { staticClass: "product-main-image" }, [
                      _c("img", {
                        attrs: {
                          id: "product-zoom",
                          src: _vm.viewProductData.image,
                          "data-zoom-image": _vm.viewProductData.brand.image,
                          alt: "product image"
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(0)
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "product-image-gallery",
                        attrs: { id: "product-zoom-gallery" }
                      },
                      _vm._l(_vm.viewProductData.images, function(item) {
                        return _c(
                          "a",
                          {
                            key: item.id,
                            staticClass: "product-gallery-item active",
                            attrs: {
                              href: "#",
                              "data-image": item.url,
                              "data-zoom-image": item.url
                            }
                          },
                          [
                            _c("img", {
                              staticClass: "w-100 h-100",
                              attrs: { src: item.url, alt: "product side" }
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
            _c("div", { staticClass: "col-md-6 p-3" }, [
              _c("div", { staticClass: "product-details " }, [
                _c("h1", { staticClass: "product-title" }, [
                  _vm._v(_vm._s(_vm.viewProductData.name))
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "product-price" }, [
                  _vm._v("\n                                        Price : "),
                  _c("strong", [
                    _vm._v(" $" + _vm._s(_vm.viewProductData.price) + " ")
                  ])
                ]),
                _vm._v(" "),
                _c("h5", [
                  _vm._v(
                    " Brand: " +
                      _vm._s(
                        _vm.viewProductData.brand &&
                          _vm.viewProductData.brand.name
                          ? _vm.viewProductData.brand.name
                          : ""
                      ) +
                      " "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-content" }, [
                  _c("p", [
                    _vm._v(
                      " Description: " +
                        _vm._s(_vm.viewProductData.description) +
                        ". "
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(2)
              ]),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "product-details-footer" }, [
                _c(
                  "div",
                  { staticClass: "product-cat" },
                  [
                    _c("span", [_vm._v("Category:")]),
                    _vm._v(" "),
                    _vm._l(_vm.viewProductData.categories, function(item) {
                      return _c(
                        "Tag",
                        { key: item.id, attrs: { color: "success" } },
                        [_vm._v(" " + _vm._s(item.name) + " ")]
                      )
                    }),
                    _vm._v(",\n                                        ")
                  ],
                  2
                ),
                _vm._v(" "),
                _vm._m(6)
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tile-footer" }, [
      _c("div", { staticClass: "row d-print-none mt-2 ml-4" }, [
        _c(
          "div",
          { staticClass: "col-6 text-right" },
          [
            _c(
              "Button",
              {
                attrs: { type: "default" },
                on: {
                  click: function($event) {
                    return _vm.$router.replace("/admin/products")
                  }
                }
              },
              [
                _c("i", { staticClass: "fa fa-fw fa-lg fa-arrow-left" }),
                _vm._v("Go Back ")
              ]
            )
          ],
          1
        )
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
      [_c("i", { staticClass: "fa fa-arrow-left icon-arrows" })]
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
    return _c("div", { staticClass: "details-filter-row details-row-size" }, [
      _c("label", [_vm._v("Color:")]),
      _vm._v(" "),
      _c(
        "select",
        { staticClass: "form-control", attrs: { name: "size", id: "size" } },
        [
          _c("option", { attrs: { value: "#", selected: "selected" } }, [
            _vm._v("Select a Color")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "s" } }, [_vm._v("Red")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "m" } }, [_vm._v("Green")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "details-filter-row details-row-size" }, [
      _c("label", { attrs: { for: "size" } }, [_vm._v("Size:")]),
      _vm._v(" "),
      _c("div", { staticClass: "select-custom" }, [
        _c(
          "select",
          { staticClass: "form-control", attrs: { name: "size", id: "size" } },
          [
            _c("option", { attrs: { value: "#", selected: "selected" } }, [
              _vm._v("Select a size")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "s" } }, [_vm._v("Small")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "m" } }, [_vm._v("Medium")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "l" } }, [_vm._v("Large")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "xl" } }, [_vm._v("Extra Large")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "size-guide", attrs: { href: "#" } }, [
        _c("i", { staticClass: "icon-th-list" }),
        _vm._v("size guide")
      ])
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
          staticStyle: { display: "none" },
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
        }),
        _c("div", { staticClass: "input-group  input-spinner" }, [
          _c("div", { staticClass: "input-group-prepend" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-decrement btn-spinner",
                staticStyle: { "min-width": "26px" },
                attrs: { type: "button" }
              },
              [_c("i", { staticClass: "icon-minus" })]
            )
          ]),
          _c("input", {
            staticClass: "form-control ",
            staticStyle: { "text-align": "center" },
            attrs: { type: "text", required: "", placeholder: "" }
          }),
          _c("div", { staticClass: "input-group-append" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-increment btn-spinner",
                staticStyle: { "min-width": "26px" },
                attrs: { type: "button" }
              },
              [_c("i", { staticClass: "icon-plus" })]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-details-action" }, [
      _c("div", { staticClass: "details-action-wrapper d-flex" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-success btn-product btn-cart",
            attrs: { href: "#" }
          },
          [_c("span", [_vm._v("Add to Cart")])]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-warning text-white",
            attrs: { href: "#", title: "Wishlist" }
          },
          [_c("span", [_vm._v("Add to Wishlist")])]
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
          staticClass: "social-icon fab fa-facebook text-info",
          attrs: { href: "#", title: "Facebook", target: "_blank" }
        },
        [_c("i", { staticClass: "icon-facebook-f" })]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "social-icon fab fa-twitter text-info",
          attrs: { href: "#", title: "Twitter", target: "_blank" }
        },
        [_c("i", { staticClass: "icon-twitter" })]
      )
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

/***/ "./resources/js/modules/products/pages/view.vue":
/*!******************************************************!*\
  !*** ./resources/js/modules/products/pages/view.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_5ac96c85_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=5ac96c85&scoped=true& */ "./resources/js/modules/products/pages/view.vue?vue&type=template&id=5ac96c85&scoped=true&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/modules/products/pages/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _view_vue_vue_type_style_index_0_id_5ac96c85_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css& */ "./resources/js/modules/products/pages/view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_5ac96c85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_5ac96c85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ac96c85",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/products/pages/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/products/pages/view.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/modules/products/pages/view.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/products/pages/view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/modules/products/pages/view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_5ac96c85_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/view.vue?vue&type=style&index=0&id=5ac96c85&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_5ac96c85_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_5ac96c85_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_5ac96c85_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_5ac96c85_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_id_5ac96c85_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/products/pages/view.vue?vue&type=template&id=5ac96c85&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/modules/products/pages/view.vue?vue&type=template&id=5ac96c85&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_5ac96c85_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=5ac96c85&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/view.vue?vue&type=template&id=5ac96c85&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_5ac96c85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_5ac96c85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);