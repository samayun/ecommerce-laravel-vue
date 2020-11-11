(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/pages/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "updateProduct",
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("productsStoreIndex", ['editProductMeta', 'editProductData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("brandsStoreIndex", ['getAllBrand'])), {}, {
    imageVisible: {
      get: function get() {
        return this.editProductMeta.isImageVisible;
      },
      set: function set(value) {
        this.HANDLE_VIEW(false);
      }
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("brandsStoreIndex", ['getBrands'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("productsStoreIndex", ['getSingleProduct', 'updateProduct', 'handleMaxSize', 'handleFormatError', 'handleSuccess', 'handleBeforeUpload', 'handleError', 'deleteImage', 'HANDLE_VIEW'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("productsStoreIndex", ['TOGGLE_MODAL'])),
  created: function created() {
    var existProId = this.$store.state.productsStoreIndex.editProductData.id;
    var id = this.$route.params.id;

    if (existProId != id) {
      this.getSingleProduct(id);
      document.title = 'Edit Products';
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.demo-upload-list{\n\n    text-align: center;\n    line-height: 60px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    box-shadow: 0 1px 1px rgba(0,0,0,.2);\n    margin-right: 4px;\n}\n.demo-upload-list img{\n    width: 100%;\n    height: 100%;\n}\n.demo-upload-list-cover{\n    display: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover{\n    display: block;\n}\n.demo-upload-list-cover i{\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n/* .ivu-icon {\n    line-height: 58px;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/edit.vue?vue&type=template&id=a5a909ac&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/pages/edit.vue?vue&type=template&id=a5a909ac& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _c(
      "form",
      {
        attrs: { role: "form" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.updateProduct($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row user" }, [
          _c("div", { staticClass: "col-md-9" }, [
            _c("div", { staticClass: "tile" }, [
              _c("div", { staticClass: "tile-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "name" }
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editProductData.name,
                              expression: "editProductData.name"
                            }
                          ],
                          staticClass: "form-control ",
                          class: {
                            "is-invalid": _vm.editProductData.errors.has("name")
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter product name",
                            id: "name",
                            value: "ICT"
                          },
                          domProps: { value: _vm.editProductData.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editProductData,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.editProductData, field: "name" }
                        }),
                        _vm._v(" "),
                        _vm._m(0)
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "slug" }
                          },
                          [_vm._v(" Custom URL (Slug) - Optional ")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editProductData.slug,
                              expression: "editProductData.slug"
                            }
                          ],
                          staticClass: "form-control ",
                          class: {
                            "is-invalid": _vm.editProductData.errors.has("slug")
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter product slug",
                            id: "slug",
                            value: "ICT"
                          },
                          domProps: { value: _vm.editProductData.slug },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editProductData,
                                "slug",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.editProductData, field: "slug" }
                        }),
                        _vm._v(" "),
                        _vm._m(1)
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "sku" }
                          },
                          [_vm._v("SKU")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editProductData.sku,
                              expression: "editProductData.sku"
                            }
                          ],
                          staticClass: "form-control ",
                          class: {
                            "is-invalid": _vm.editProductData.errors.has("sku")
                          },
                          attrs: {
                            type: "number",
                            placeholder: "Enter product sku",
                            id: "sku"
                          },
                          domProps: { value: _vm.editProductData.sku },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editProductData,
                                "sku",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.editProductData, field: "sku" }
                        }),
                        _vm._v(" "),
                        _vm._m(2)
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "brand_id" }
                          },
                          [_vm._v("Brand")]
                        ),
                        _vm._v(" "),
                        _c(
                          "Select",
                          {
                            class: {
                              "is-invalid": _vm.editProductData.errors.has(
                                "brand_id"
                              )
                            },
                            model: {
                              value: _vm.editProductData.brand_id,
                              callback: function($$v) {
                                _vm.$set(_vm.editProductData, "brand_id", $$v)
                              },
                              expression: "editProductData.brand_id"
                            }
                          },
                          _vm._l(_vm.getAllBrand, function(item) {
                            return _c(
                              "Option",
                              { key: item.id, attrs: { value: item.id } },
                              [
                                _c("img", {
                                  attrs: {
                                    src: item.logo,
                                    alt: "item.name",
                                    width: "20rem"
                                  }
                                }),
                                _vm._v(
                                  "\n                                                " +
                                    _vm._s(item.name) +
                                    " "
                                )
                              ]
                            )
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: {
                            form: _vm.editProductData,
                            field: "brand_id"
                          }
                        }),
                        _vm._v(" "),
                        _vm._m(3)
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "price" }
                          },
                          [_vm._v("Price")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editProductData.price,
                              expression: "editProductData.price"
                            }
                          ],
                          staticClass: "form-control ",
                          class: {
                            "is-invalid": _vm.editProductData.errors.has(
                              "price"
                            )
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter product price",
                            id: "price",
                            value: "85.00"
                          },
                          domProps: { value: _vm.editProductData.price },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editProductData,
                                "price",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.editProductData, field: "price" }
                        }),
                        _vm._v(" "),
                        _vm._m(4)
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "quantity" }
                          },
                          [_vm._v("Quantity")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editProductData.quantity,
                              expression: "editProductData.quantity"
                            }
                          ],
                          staticClass: "form-control ",
                          class: {
                            "is-invalid": _vm.editProductData.errors.has(
                              "quantity"
                            )
                          },
                          attrs: {
                            type: "number",
                            placeholder: "Enter product quantity",
                            id: "quantity",
                            value: "88"
                          },
                          domProps: { value: _vm.editProductData.quantity },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editProductData,
                                "quantity",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: {
                            form: _vm.editProductData,
                            field: "quantity"
                          }
                        }),
                        _vm._v(" "),
                        _vm._m(5)
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "control-label",
                        attrs: { for: "description" }
                      },
                      [_vm._v("Description")]
                    ),
                    _vm._v(" "),
                    _c(
                      "textarea",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editProductData.description,
                            expression: "editProductData.description"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.editProductData.errors.has(
                            "description"
                          )
                        },
                        attrs: { id: "description", rows: "2" },
                        domProps: { value: _vm.editProductData.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.editProductData,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      },
                      [_vm._v("It's good product ")]
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.editProductData, field: "description" }
                    })
                  ],
                  1
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card card-info collapsed-card" }, [
                  _vm._m(6),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "card-body",
                      staticStyle: { display: "block" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "status" } }, [
                            _vm._v(" Publish  :  ")
                          ]),
                          _vm._v(" "),
                          _c("i-switch", {
                            attrs: { color: "success" },
                            model: {
                              value: _vm.editProductData.status,
                              callback: function($$v) {
                                _vm.$set(_vm.editProductData, "status", $$v)
                              },
                              expression: "editProductData.status"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card card-warning collapsed-card" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "card-body",
                      staticStyle: { display: "block" }
                    },
                    [
                      _c(
                        "Upload",
                        {
                          ref: "upload",
                          attrs: {
                            type: "drag",
                            multiple: false,
                            "show-upload-list": false,
                            name: "image",
                            headers: {
                              "x-csrf-token": _vm.token,
                              "X-Requested-With": "XMLHttpRequest"
                            },
                            "before-upload": _vm.handleBeforeUpload,
                            "on-success": _vm.handleSuccess,
                            format: ["jpg", "jpeg", "png", "svg"],
                            "max-size": 2048,
                            "on-format-error": _vm.handleFormatError,
                            "on-exceeded-size": _vm.handleMaxSize,
                            action: "/api/admin/products"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticStyle: { pediting: "20px 0" } },
                            [
                              _c("Icon", {
                                staticStyle: { color: "#3399ff" },
                                attrs: { type: "ios-cloud-upload", size: "52" }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  class: {
                                    "is-invalid text-danger": _vm.editProductData.errors.has(
                                      "image"
                                    )
                                  }
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.$t("click_here_upload")) +
                                      " "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        staticStyle: { display: "block" },
                        attrs: { form: _vm.editProductData, field: "image" }
                      }),
                      _vm._v(" "),
                      _vm.editProductData.image
                        ? _c("div", { staticClass: "demo-upload-list" }, [
                            _c("img", {
                              staticStyle: { width: "10rem", height: "6rem" },
                              attrs: { src: "" + _vm.editProductData.image }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "demo-upload-list-cover" },
                              [
                                _c("Icon", {
                                  attrs: {
                                    type: "ios-camera-outline",
                                    size: "large"
                                  },
                                  on: { click: _vm.HANDLE_VIEW }
                                }),
                                _vm._v(" "),
                                _c("Icon", {
                                  attrs: {
                                    type: "ios-trash-outline",
                                    size: "large"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteImage("edit")
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.editProductData.image,
                              expression: "editProductData.image"
                            }
                          ],
                          staticClass: "form-group"
                        },
                        [
                          _c("label", { attrs: { for: "featured" } }, [
                            _vm._v(" Featured :   ")
                          ]),
                          _vm._v(" "),
                          _c("i-switch", {
                            attrs: { name: "featured" },
                            on: {
                              "on-change": function($event) {
                                _vm.editProductData.featured = !_vm
                                  .editProductData.featured
                              }
                            },
                            model: {
                              value: _vm.editProductData.featured,
                              callback: function($$v) {
                                _vm.$set(_vm.editProductData, "featured", $$v)
                              },
                              expression: "editProductData.featured"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "Modal",
                        {
                          attrs: { title: "View image" },
                          model: {
                            value: _vm.imageVisible,
                            callback: function($$v) {
                              _vm.imageVisible = $$v
                            },
                            expression: "imageVisible"
                          }
                        },
                        [
                          _c("img", {
                            staticStyle: { width: "100%" },
                            attrs: {
                              src: _vm.editProductData.image,
                              alt: _vm.editProductData.name
                            }
                          })
                        ]
                      )
                    ],
                    1
                  )
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
                    attrs: { type: "success" },
                    on: { click: _vm.updateProduct }
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-lg fa-check-circle" }),
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.editProductData.busy
                            ? _vm.$t("products.editing") + ".."
                            : _vm.$t("products.edit")
                        )
                    )
                  ]
                ),
                _vm._v(" "),
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
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "invalid-feedback active" }, [
      _c("i", { staticClass: "fa fa-exclamation-circle fa-fw" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "invalid-feedback active" }, [
      _c("i", { staticClass: "fa fa-exclamation-circle fa-fw" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "invalid-feedback active" }, [
      _c("i", { staticClass: "fa fa-exclamation-circle fa-fw" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "invalid-feedback active" }, [
      _c("i", { staticClass: "fa fa-exclamation-circle fa-fw" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "invalid-feedback active" }, [
      _c("i", { staticClass: "fa fa-exclamation-circle fa-fw" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "invalid-feedback active" }, [
      _c("i", { staticClass: "fa fa-exclamation-circle fa-fw" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v(" Featured / Publishing ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: { type: "button", "data-card-widget": "collapse" }
          },
          [_c("i", { staticClass: "fas fa-plus" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v(" Image ")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: { type: "button", "data-card-widget": "collapse" }
          },
          [_c("i", { staticClass: "fas fa-plus" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/modules/products/pages/edit.vue":
/*!************************************************************!*\
  !*** ./resources/js/admin/modules/products/pages/edit.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_a5a909ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=a5a909ac& */ "./resources/js/admin/modules/products/pages/edit.vue?vue&type=template&id=a5a909ac&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/admin/modules/products/pages/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/admin/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_a5a909ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_a5a909ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/modules/products/pages/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/modules/products/pages/edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/pages/edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/modules/products/pages/edit.vue?vue&type=template&id=a5a909ac&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/pages/edit.vue?vue&type=template&id=a5a909ac& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_a5a909ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=a5a909ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/edit.vue?vue&type=template&id=a5a909ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_a5a909ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_a5a909ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);