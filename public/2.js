(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/createProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/components/createProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "createProduct",
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("productsStoreIndex", ['addProductMeta', 'addProductData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("brandsStoreIndex", ['getAllBrand'])), {}, {
    imageVisible: {
      get: function get() {
        return this.addProductMeta.isImageVisible;
      },
      set: function set(value) {
        this.HANDLE_VIEW(true);
      }
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("brandsStoreIndex", ['getBrands'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("productsStoreIndex", ['createProduct', 'handleMaxSize', 'handleFormatError', 'handleSuccess', 'handleBeforeUpload', 'handleError', 'deleteImage', 'HANDLE_VIEW'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("productsStoreIndex", ['TOGGLE_MODAL'])),
  created: function created() {
    if (this.addProductMeta.showModal) {
      document.title = 'Create Products';
    }

    this.token = window.Laravel.csrfToken;

    if (this.getAllBrand.length == 0) {
      this.getBrands();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/showAllData.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/components/showAllData.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShowAllData",
  data: function data() {
    var _this = this;

    var deleteMultiple = {};

    if (this.isPermitted('delete', 'product')) {
      deleteMultiple = {
        type: 'selection',
        align: 'center',
        width: 40
      };
    } else {
      deleteMultiple = {
        title: 'ID',
        key: 'id',
        sortable: true,
        tooltip: true
      };
    }

    return {
      dataStructureTable: [deleteMultiple, {
        title: 'SKU',
        key: 'sku',
        sortable: true,
        tooltip: true
      }, {
        title: 'Name',
        key: 'name',
        sortable: true,
        tooltip: true
      }, {
        title: 'Brand',
        key: 'brand',
        sortable: true,
        tooltip: true,
        render: function render(h, params) {
          return h('Tag', {
            props: {
              type: 'border',
              color: '#000'
            }
          }, params.row.brand.name);
        }
      }, {
        title: 'Price',
        key: 'price',
        sortable: true,
        tooltip: true
      }, {
        title: 'Image',
        key: 'image',
        render: function render(h, params) {
          return h('Avatar', {
            props: {
              src: "".concat(params.row.image),
              shape: 'square',
              alt: "".concat(params.row.name),
              size: 'large'
            },
            style: {
              marginRight: '5px',
              width: '6rem',
              height: '5rem'
            }
          });
        }
      }, {
        title: 'Action',
        key: 'action',
        width: 100,
        align: 'center',
        render: function render(h, params) {
          var edit = h('');

          if (_this.isPermitted('update', 'product')) {
            edit = h('Button', {
              props: {
                icon: 'ios-editor fa fa-edit',
                size: 'small',
                color: 'primary'
              },
              style: {
                marginRight: '7px',
                cursor: 'pointer'
              },
              on: {
                click: function click() {
                  // this.GET_EDIT_DATA(params.row)
                  _this.$router.push('/admin/products/edit/' + params.row.id);
                }
              }
            }, '');
          }

          var deleteButton = h('');

          if (_this.isPermitted('delete', 'product')) {
            deleteButton = h('Icon', {
              props: {
                custom: 'fa fa-trash',
                size: 'large',
                color: 'red'
              },
              style: {
                cursor: 'pointer'
              },
              on: {
                click: function click() {
                  _this.deleteProduct(params.row);
                }
              }
            }, '');
          }

          ;
          return h('div', [edit, deleteButton]);
        }
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("productsStoreIndex", ['getAllProduct', 'filterString'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("productsStoreIndex", ['getProducts', 'changePaginatedPage', 'changePaginatedPerPage', 'deleteConfirmation', 'deleteProduct', 'multiDelete', 'handleSelectionChange'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("productsStoreIndex", ["GET_EDIT_DATA"])),
  created: function created() {
    if (this.getAllProduct.length == 0) {
      this.getProducts();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "updateProduct",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("productsStoreIndex", ['editProductMeta', 'editProductData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("brandsStoreIndex", ['getAllBrand'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("brandsStoreIndex", ['getBrands'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("productsStoreIndex", ['updateProduct'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("productsStoreIndex", ['TOGGLE_MODAL'])),
  created: function created() {
    if (this.editProductMeta.showModal) {
      document.title = 'Update Products';
    }

    this.token = window.Laravel.csrfToken;

    if (this.getAllBrand.length == 0) {
      this.getBrands();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/products.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/pages/products.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_createProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/createProduct */ "./resources/js/admin/modules/products/components/createProduct.vue");
/* harmony import */ var _components_updateProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/updateProduct */ "./resources/js/admin/modules/products/components/updateProduct.vue");
/* harmony import */ var _components_showAllData_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/showAllData.vue */ "./resources/js/admin/modules/products/components/showAllData.vue");
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
  components: {
    createProduct: _components_createProduct__WEBPACK_IMPORTED_MODULE_1__["default"],
    updateProduct: _components_updateProduct__WEBPACK_IMPORTED_MODULE_2__["default"],
    showAllData: _components_showAllData_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    document.title = 'Products';
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("productsStoreIndex", ['multiSelected'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("productsStoreIndex", ['bulk_delete']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/createProduct.vue?vue&type=template&id=6695d98f&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/components/createProduct.vue?vue&type=template&id=6695d98f& ***!
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
  return _c("div", {}, [
    _c(
      "span",
      { staticClass: "float-right mr-3" },
      [
        _c(
          "a",
          {
            staticClass: "btn btn-primary",
            attrs: {
              disabled: _vm.addProductData.busy,
              loading: _vm.addProductData.busy
            },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.TOGGLE_MODAL("add")
              }
            }
          },
          [
            _c("Icon", { attrs: { type: "ios-add", size: "large" } }),
            _vm._v(" " + _vm._s(_vm.$t("products.add")))
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "Modal",
          {
            staticClass: "m-auto w-100",
            attrs: {
              role: "form",
              title: _vm.$t("products.add"),
              headers: {
                "x-csrf-token": _vm.token,
                "X-Requested-With": "XMLHttpRequest"
              },
              "mask-closable": true,
              closable: true
            },
            model: {
              value: _vm.addProductMeta.showModal,
              callback: function($$v) {
                _vm.$set(_vm.addProductMeta, "showModal", $$v)
              },
              expression: "addProductMeta.showModal"
            }
          },
          [
            _c(
              "form",
              {
                attrs: { role: "form" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createProduct($event)
                  }
                }
              },
              [
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tile-body" },
                  [
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
                                  value: _vm.addProductData.name,
                                  expression: "addProductData.name"
                                }
                              ],
                              staticClass: "form-control ",
                              class: {
                                "is-invalid": _vm.addProductData.errors.has(
                                  "name"
                                )
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter product name",
                                id: "name",
                                value: "ICT"
                              },
                              domProps: { value: _vm.addProductData.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.addProductData,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.addProductData, field: "name" }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "invalid-feedback active" },
                              [
                                _c("i", {
                                  staticClass: "fa fa-exclamation-circle fa-fw"
                                })
                              ]
                            )
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
                                  value: _vm.addProductData.slug,
                                  expression: "addProductData.slug"
                                }
                              ],
                              staticClass: "form-control ",
                              class: {
                                "is-invalid": _vm.addProductData.errors.has(
                                  "slug"
                                )
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter product slug",
                                id: "slug",
                                value: "ICT"
                              },
                              domProps: { value: _vm.addProductData.slug },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.addProductData,
                                    "slug",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.addProductData, field: "slug" }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "invalid-feedback active" },
                              [
                                _c("i", {
                                  staticClass: "fa fa-exclamation-circle fa-fw"
                                })
                              ]
                            )
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
                                  value: _vm.addProductData.sku,
                                  expression: "addProductData.sku"
                                }
                              ],
                              staticClass: "form-control ",
                              class: {
                                "is-invalid": _vm.addProductData.errors.has(
                                  "sku"
                                )
                              },
                              attrs: {
                                type: "number",
                                placeholder: "Enter product sku",
                                id: "sku"
                              },
                              domProps: { value: _vm.addProductData.sku },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.addProductData,
                                    "sku",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.addProductData, field: "sku" }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "invalid-feedback active" },
                              [
                                _c("i", {
                                  staticClass: "fa fa-exclamation-circle fa-fw"
                                })
                              ]
                            )
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
                                  "is-invalid": _vm.addProductData.errors.has(
                                    "brand_id"
                                  )
                                },
                                model: {
                                  value: _vm.addProductData.brand_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.addProductData,
                                      "brand_id",
                                      $$v
                                    )
                                  },
                                  expression: "addProductData.brand_id"
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
                                      "\n                                              " +
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
                                form: _vm.addProductData,
                                field: "brand_id"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "invalid-feedback active" },
                              [
                                _c("i", {
                                  staticClass: "fa fa-exclamation-circle fa-fw"
                                })
                              ]
                            )
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
                                  value: _vm.addProductData.price,
                                  expression: "addProductData.price"
                                }
                              ],
                              staticClass: "form-control ",
                              class: {
                                "is-invalid": _vm.addProductData.errors.has(
                                  "price"
                                )
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter product price",
                                id: "price",
                                value: "85.00"
                              },
                              domProps: { value: _vm.addProductData.price },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.addProductData,
                                    "price",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.addProductData,
                                field: "price"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "invalid-feedback active" },
                              [
                                _c("i", {
                                  staticClass: "fa fa-exclamation-circle fa-fw"
                                })
                              ]
                            )
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
                                value: _vm.addProductData.description,
                                expression: "addProductData.description"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.addProductData.errors.has(
                                "description"
                              )
                            },
                            attrs: { id: "description", rows: "2" },
                            domProps: { value: _vm.addProductData.description },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.addProductData,
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
                          attrs: {
                            form: _vm.addProductData,
                            field: "description"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
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
                          { staticStyle: { padding: "20px 0" } },
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
                                  "is-invalid text-danger": _vm.addProductData.errors.has(
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
                      attrs: { form: _vm.addProductData, field: "image" }
                    }),
                    _vm._v(" "),
                    _vm.addProductData.image
                      ? _c("div", { staticClass: "demo-upload-list" }, [
                          _c("img", {
                            staticStyle: { width: "10rem", height: "6rem" },
                            attrs: { src: "" + _vm.addProductData.image }
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
                                    return _vm.deleteImage("add")
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
                            value: _vm.addProductData.image,
                            expression: "addProductData.image"
                          }
                        ],
                        staticClass: "form-group mt-1"
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
                              _vm.addProductData.featured = !_vm.addProductData
                                .featured
                            }
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
                            src: _vm.addProductData.image,
                            alt: _vm.addProductData.name
                          }
                        })
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "status" } }, [
                      _vm._v(" Publish Now :   ")
                    ]),
                    _vm._v(" "),
                    _c("i-switch", {
                      attrs: { name: "status" },
                      on: {
                        "on-change": function($event) {
                          _vm.addProductData.status = !_vm.addProductData.status
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "tile-footer" }, [
                  _c("div", { staticClass: "row d-print-none mt-2" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 text-right" },
                      [
                        _c(
                          "Button",
                          {
                            staticClass: "btn btn-success",
                            attrs: { type: "primary" },
                            on: { click: _vm.createProduct }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-fw fa-lg fa-check-circle"
                            }),
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  _vm.addProductData.busy
                                    ? _vm.$t("products.adding") + ".."
                                    : _vm.$t("products.add")
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
                                return _vm.TOGGLE_MODAL("add")
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-fw fa-lg fa-arrow-left"
                            }),
                            _vm._v("Go Back ")
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "footer" })
              ]
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/showAllData.vue?vue&type=template&id=50b2902c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/components/showAllData.vue?vue&type=template&id=50b2902c& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "col-md-12" },
    [
      _vm.getAllProduct.length
        ? _c("Table", {
            ref: "selection",
            attrs: {
              border: "",
              columns: _vm.dataStructureTable,
              data: _vm.getAllProduct
            },
            on: { "on-selection-change": _vm.handleSelectionChange }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("br")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=template&id=14ef60bc&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=template&id=14ef60bc& ***!
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
  return _c("div", {}, [
    _c(
      "span",
      { staticClass: "float-right mr-3" },
      [
        _c(
          "Modal",
          {
            staticClass: "m-auto w-100",
            attrs: {
              role: "form",
              title: _vm.$t("products.edit"),
              headers: {
                "x-csrf-token": _vm.token,
                "X-Requested-With": "XMLHttpRequest"
              },
              "mask-closable": true,
              closable: true
            },
            model: {
              value: _vm.editProductMeta.showModal,
              callback: function($$v) {
                _vm.$set(_vm.editProductMeta, "showModal", $$v)
              },
              expression: "editProductMeta.showModal"
            }
          },
          [
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
                _c("hr"),
                _vm._v(" "),
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
                              "is-invalid": _vm.editProductData.errors.has(
                                "name"
                              )
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
                          _c(
                            "div",
                            { staticClass: "invalid-feedback active" },
                            [
                              _c("i", {
                                staticClass: "fa fa-exclamation-circle fa-fw"
                              })
                            ]
                          )
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
                              "is-invalid": _vm.editProductData.errors.has(
                                "slug"
                              )
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
                          _c(
                            "div",
                            { staticClass: "invalid-feedback active" },
                            [
                              _c("i", {
                                staticClass: "fa fa-exclamation-circle fa-fw"
                              })
                            ]
                          )
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
                              "is-invalid": _vm.editProductData.errors.has(
                                "sku"
                              )
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
                          _c(
                            "div",
                            { staticClass: "invalid-feedback active" },
                            [
                              _c("i", {
                                staticClass: "fa fa-exclamation-circle fa-fw"
                              })
                            ]
                          )
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
                                {
                                  key: item.id,
                                  attrs: {
                                    value: item.id,
                                    selected:
                                      item.id == _vm.editProductData.brand_id
                                  }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: item.logo,
                                      alt: "item.name",
                                      width: "20rem"
                                    }
                                  }),
                                  _vm._v(
                                    "\n                                              " +
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
                          _c(
                            "div",
                            { staticClass: "invalid-feedback active" },
                            [
                              _c("i", {
                                staticClass: "fa fa-exclamation-circle fa-fw"
                              })
                            ]
                          )
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
                          _c(
                            "div",
                            { staticClass: "invalid-feedback active" },
                            [
                              _c("i", {
                                staticClass: "fa fa-exclamation-circle fa-fw"
                              })
                            ]
                          )
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
                        attrs: {
                          form: _vm.editProductData,
                          field: "description"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "tile-footer" }, [
                  _c("div", { staticClass: "row d-print-none mt-2" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 text-right" },
                      [
                        _c(
                          "Button",
                          {
                            staticClass: "btn btn-success",
                            attrs: { type: "primary" },
                            on: { click: _vm.updateProduct }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-fw fa-lg fa-check-circle"
                            }),
                            _vm._v(
                              "\n                                " +
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
                                return _vm.TOGGLE_MODAL("edit")
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-fw fa-lg fa-arrow-left"
                            }),
                            _vm._v("Go Back ")
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
            _c("div", { attrs: { slot: "footer" }, slot: "footer" })
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/products.vue?vue&type=template&id=9140c4f8&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/products/pages/products.vue?vue&type=template&id=9140c4f8& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "main",
    { staticClass: "app-content", attrs: { id: "app" } },
    [
      _c(
        "div",
        { staticClass: "app-title" },
        [
          _c("div", [
            _c("h1", [
              _c("i", { staticClass: "fa fa-fw fa-lg fa-check-circle" }),
              _vm._v(" " + _vm._s(_vm.$t("products.name")) + " ")
            ]),
            _vm._v(" "),
            _c("p", [_vm._v(" List of all products ")])
          ]),
          _vm._v(" "),
          _vm.isPermitted("delete", "product") && _vm.multiSelected.length !== 0
            ? _c(
                "span",
                { staticClass: "m-2 " },
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "error" },
                      on: { click: _vm.bulk_delete }
                    },
                    [_vm._v(" BULK " + _vm._s(_vm.$t("delete")) + " ")]
                  ),
                  _vm._v(
                    " " + _vm._s(_vm.multiSelected.length) + " selected\n     "
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isPermitted("create", "product") ? _c("create-product") : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row " },
        [_vm.isPermitted("view", "product") ? _c("show-all-data") : _vm._e()],
        1
      ),
      _vm._v(" "),
      _vm.isPermitted("update", "product") ? _c("updateProduct") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/modules/products/components/createProduct.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/modules/products/components/createProduct.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createProduct_vue_vue_type_template_id_6695d98f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProduct.vue?vue&type=template&id=6695d98f& */ "./resources/js/admin/modules/products/components/createProduct.vue?vue&type=template&id=6695d98f&");
/* harmony import */ var _createProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProduct.vue?vue&type=script&lang=js& */ "./resources/js/admin/modules/products/components/createProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _createProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _createProduct_vue_vue_type_template_id_6695d98f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _createProduct_vue_vue_type_template_id_6695d98f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/modules/products/components/createProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/modules/products/components/createProduct.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/components/createProduct.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./createProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/createProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/modules/products/components/createProduct.vue?vue&type=template&id=6695d98f&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/components/createProduct.vue?vue&type=template&id=6695d98f& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_template_id_6695d98f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./createProduct.vue?vue&type=template&id=6695d98f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/createProduct.vue?vue&type=template&id=6695d98f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_template_id_6695d98f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_template_id_6695d98f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/modules/products/components/showAllData.vue":
/*!************************************************************************!*\
  !*** ./resources/js/admin/modules/products/components/showAllData.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showAllData_vue_vue_type_template_id_50b2902c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showAllData.vue?vue&type=template&id=50b2902c& */ "./resources/js/admin/modules/products/components/showAllData.vue?vue&type=template&id=50b2902c&");
/* harmony import */ var _showAllData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showAllData.vue?vue&type=script&lang=js& */ "./resources/js/admin/modules/products/components/showAllData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _showAllData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showAllData_vue_vue_type_template_id_50b2902c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showAllData_vue_vue_type_template_id_50b2902c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/modules/products/components/showAllData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/modules/products/components/showAllData.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/components/showAllData.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./showAllData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/showAllData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/modules/products/components/showAllData.vue?vue&type=template&id=50b2902c&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/components/showAllData.vue?vue&type=template&id=50b2902c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllData_vue_vue_type_template_id_50b2902c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./showAllData.vue?vue&type=template&id=50b2902c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/showAllData.vue?vue&type=template&id=50b2902c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllData_vue_vue_type_template_id_50b2902c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllData_vue_vue_type_template_id_50b2902c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/modules/products/components/updateProduct.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/modules/products/components/updateProduct.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateProduct_vue_vue_type_template_id_14ef60bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateProduct.vue?vue&type=template&id=14ef60bc& */ "./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=template&id=14ef60bc&");
/* harmony import */ var _updateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateProduct.vue?vue&type=script&lang=js& */ "./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _updateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _updateProduct_vue_vue_type_template_id_14ef60bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _updateProduct_vue_vue_type_template_id_14ef60bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/modules/products/components/updateProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./updateProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=template&id=14ef60bc&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=template&id=14ef60bc& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_updateProduct_vue_vue_type_template_id_14ef60bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./updateProduct.vue?vue&type=template&id=14ef60bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/components/updateProduct.vue?vue&type=template&id=14ef60bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_updateProduct_vue_vue_type_template_id_14ef60bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_updateProduct_vue_vue_type_template_id_14ef60bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/modules/products/pages/products.vue":
/*!****************************************************************!*\
  !*** ./resources/js/admin/modules/products/pages/products.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_vue_vue_type_template_id_9140c4f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.vue?vue&type=template&id=9140c4f8& */ "./resources/js/admin/modules/products/pages/products.vue?vue&type=template&id=9140c4f8&");
/* harmony import */ var _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue?vue&type=script&lang=js& */ "./resources/js/admin/modules/products/pages/products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_vue_vue_type_template_id_9140c4f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_vue_vue_type_template_id_9140c4f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/modules/products/pages/products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/modules/products/pages/products.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/pages/products.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/modules/products/pages/products.vue?vue&type=template&id=9140c4f8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/admin/modules/products/pages/products.vue?vue&type=template&id=9140c4f8& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_9140c4f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=template&id=9140c4f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/products/pages/products.vue?vue&type=template&id=9140c4f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_9140c4f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_9140c4f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);