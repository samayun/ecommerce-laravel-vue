(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Admin-Brands"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "addModalComponent",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("brandsStoreIndex", ['addMeta', 'isLoading', 'addBrandData'])), {}, {
    imageVisible: {
      get: function get() {
        return this.addMeta.isImageVisible;
      },
      set: function set(value) {
        this.HANDLE_VIEW(true);
      }
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("brandsStoreIndex", ['createBrand', 'handleMaxSize', 'handleFormatError', 'handleSuccess', 'handleBeforeUpload', 'handleError', 'deleteImage', 'HANDLE_VIEW'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("brandsStoreIndex", ['TOGGLE_MODAL'])),
  created: function created() {
    this.token = window.Laravel.csrfToken;

    var _this = this;

    $Bus.$on('clearAddedFiles', function () {
      _this.$refs.upload.clearFiles();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/editModalComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/components/editModalComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'editModalComponent',
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("brandsStoreIndex", ['editMeta', 'editBrandData'])), {}, {
    imageVisible: {
      get: function get() {
        return this.editMeta.isImageVisible;
      },
      set: function set(value) {
        this.HANDLE_VIEW(value);
      }
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("brandsStoreIndex", ['updateBrand', 'handleBeforeUpload', 'handleMaxSize', 'handleFormatError', 'handleSuccess', 'handleError', 'deleteImage', 'HANDLE_VIEW'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("brandsStoreIndex", ['TOGGLE_MODAL'])),
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.token = window.Laravel.csrfToken;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/showAllData.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/components/showAllData.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShowAllData",
  data: function data() {
    var _this = this;

    var deleteMultiple = {};

    if (this.isPermitted('delete', 'brand')) {
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
        title: 'ID',
        key: 'id',
        sortable: true,
        tooltip: true
      }, {
        title: 'Name',
        key: 'name',
        sortable: true,
        tooltip: true
      }, {
        title: 'LOGO',
        key: 'logo',
        render: function render(h, params) {
          return h('img', {
            attrs: {
              src: "".concat(params.row.logo),
              alt: "".concat(params.row.name)
            },
            style: {
              marginRight: '5px',
              width: '10rem',
              height: '5rem'
            }
          });
        }
      }, {
        title: 'Action',
        key: 'action',
        width: 150,
        align: 'center',
        render: function render(h, params) {
          var deleteButton = h('');

          if (_this.isPermitted('delete', 'brand')) {
            deleteButton = h('Button', {
              props: {
                type: 'error',
                size: 'small'
              },
              on: {
                click: function click() {
                  _this.deleteBrand(params.row);
                }
              }
            }, 'Delete');
          }

          ;
          var edit = h('');

          if (_this.isPermitted('update', 'brand')) {
            edit = h('Button', {
              props: {
                type: 'info',
                size: 'small'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: function click() {
                  _this.GET_EDIT_DATA(params.row);
                }
              }
            }, 'Edit');
          }

          return h('div', [edit, deleteButton]);
        }
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("brandsStoreIndex", ['isLoading', 'multiSelected'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("brandsStoreIndex", ['getAllBrand', 'filterString'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("brandsStoreIndex", ['getBrands', 'changePaginatedPage', 'changePaginatedPerPage', 'deleteConfirmation', 'deleteBrand', 'multiDelete', 'handleSelectionChange'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("brandsStoreIndex", ["GET_EDIT_DATA"])),
  created: function created() {
    if (this.getAllBrand.length == 0) {
      this.getBrands();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/pages/brands.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/pages/brands.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_addModalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/addModalComponent */ "./resources/js/modules/brands/components/addModalComponent.vue");
/* harmony import */ var _components_editModalComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/editModalComponent */ "./resources/js/modules/brands/components/editModalComponent.vue");
/* harmony import */ var _components_showAllData_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/showAllData.vue */ "./resources/js/modules/brands/components/showAllData.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    addModalComponent: _components_addModalComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    editModalComponent: _components_editModalComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    showAllData: _components_showAllData_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    document.title = 'Brands';
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("brandsStoreIndex", ['isLoading', 'filterString'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('settingsStoreIndex', ['getIsDark'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("brandsStoreIndex", ['getBrands']))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.demo-upload-list{\n\n    text-align: center;\n    line-height: 60px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    box-shadow: 0 1px 1px rgba(0,0,0,.2);\n    margin-right: 4px;\n}\n.demo-upload-list img{\n    width: 100%;\n    height: 100%;\n}\n.demo-upload-list-cover{\n    display: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover{\n    display: block;\n}\n.demo-upload-list-cover i{\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n/* .ivu-icon {\n    line-height: 58px;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/pages/brands.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/pages/brands.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.app-title-dark {\n    background-color: #343a40;\n    color: #ffffff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addModalComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/pages/brands.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/pages/brands.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./brands.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/pages/brands.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=template&id=361eb365&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=template&id=361eb365& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "span",
    { staticClass: "float-right mr-3" },
    [
      _c(
        "a",
        {
          staticClass: "btn btn-primary",
          attrs: {
            disabled: _vm.addBrandData.busy,
            loading: _vm.addBrandData.busy
          },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.TOGGLE_MODAL("add")
            }
          }
        },
        [
          _c("Icon", { attrs: { type: "ios-add" } }),
          _vm._v(" " + _vm._s(_vm.$t("brands.add")))
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: {
            role: "form",
            title: _vm.$t("brands.add"),
            headers: {
              "x-csrf-token": _vm.token,
              "X-Requested-With": "XMLHttpRequest"
            },
            "mask-closable": false,
            closable: false
          },
          model: {
            value: _vm.addMeta.showModal,
            callback: function($$v) {
              _vm.$set(_vm.addMeta, "showModal", $$v)
            },
            expression: "addMeta.showModal"
          }
        },
        [
          _c("Loading", { attrs: { show: _vm.addBrandData.busy } }),
          _vm._v(" "),
          _c("Input", {
            class: { "is-invalid": _vm.addBrandData.errors.has("name") },
            attrs: { placeholder: _vm.$t("brands.add"), autofocus: "" },
            model: {
              value: _vm.addBrandData.name,
              callback: function($$v) {
                _vm.$set(_vm.addBrandData, "name", $$v)
              },
              expression: "addBrandData.name"
            }
          }),
          _vm._v(" "),
          _c("has-error", { attrs: { form: _vm.addBrandData, field: "name" } }),
          _vm._v(" "),
          _c(
            "Upload",
            {
              ref: "upload",
              attrs: {
                type: "drag",
                multiple: false,
                "show-upload-list": false,
                name: "logo",
                headers: {
                  "x-csrf-token": _vm.token,
                  "X-Requested-With": "XMLHttpRequest"
                },
                "before-upload": _vm.handleBeforeUpload,
                "on-success": _vm.handleSuccess,
                format: ["jpg", "jpeg", "png"],
                "max-size": 2048,
                "on-format-error": _vm.handleFormatError,
                "on-exceeded-size": _vm.handleMaxSize,
                action: "/api/admin/brands"
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
                        "text-danger": _vm.addBrandData.errors.has("logo")
                      }
                    },
                    [_vm._v(" " + _vm._s(_vm.$t("click_here_upload")) + " ")]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("has-error", { attrs: { form: _vm.addBrandData, field: "logo" } }),
          _vm._v(" "),
          _vm.addBrandData.logo
            ? _c("div", { staticClass: "demo-upload-list" }, [
                _c("img", {
                  staticStyle: { width: "10rem", height: "6rem" },
                  attrs: { src: "" + _vm.addBrandData.logo }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "demo-upload-list-cover" },
                  [
                    _c("Icon", {
                      attrs: { type: "ios-camera-outline", size: "large" },
                      on: { click: _vm.HANDLE_VIEW }
                    }),
                    _vm._v(" "),
                    _c("Icon", {
                      attrs: { type: "ios-trash-outline", size: "large" },
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
                  src: _vm.addBrandData.logo,
                  alt: _vm.addBrandData.name
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
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
                [_vm._v(" " + _vm._s(_vm.$t("close")) + " ")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                { attrs: { type: "primary" }, on: { click: _vm.createBrand } },
                [
                  _c("i", { staticClass: "fa fa-fw fa-lg fa-check-circle" }),
                  _vm._v(
                    " " +
                      _vm._s(
                        _vm.addBrandData.busy
                          ? _vm.$t("brands.adding") + ".."
                          : _vm.$t("brands.add")
                      )
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/editModalComponent.vue?vue&type=template&id=72b3a516&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/components/editModalComponent.vue?vue&type=template&id=72b3a516& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _c(
        "Modal",
        {
          attrs: {
            role: "form",
            title: _vm.$t("brands.edit"),
            "mask-closable": false,
            closable: false,
            loading: _vm.editBrandData.busy
          },
          model: {
            value: _vm.editMeta.showModal,
            callback: function($$v) {
              _vm.$set(_vm.editMeta, "showModal", $$v)
            },
            expression: "editMeta.showModal"
          }
        },
        [
          _c("Loading", { attrs: { show: _vm.editBrandData.busy } }),
          _vm._v(" "),
          _c("Input", {
            class: { "is-invalid": _vm.editBrandData.errors.has("name") },
            attrs: { placeholder: "Edit brand name" },
            model: {
              value: _vm.editBrandData.name,
              callback: function($$v) {
                _vm.$set(_vm.editBrandData, "name", $$v)
              },
              expression: "editBrandData.name"
            }
          }),
          _vm._v(" "),
          _c("has-error", {
            attrs: { form: _vm.editBrandData, field: "name" }
          }),
          _vm._v(" "),
          _c("Input", {
            class: { "is-invalid": _vm.editBrandData.errors.has("slug") },
            attrs: { placeholder: "Edit brand slug" },
            model: {
              value: _vm.editBrandData.slug,
              callback: function($$v) {
                _vm.$set(_vm.editBrandData, "slug", $$v)
              },
              expression: "editBrandData.slug"
            }
          }),
          _vm._v(" "),
          _c("has-error", {
            attrs: { form: _vm.editBrandData, field: "slug" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "space" }),
          _vm._v(" "),
          _c(
            "Upload",
            {
              ref: "upload",
              attrs: {
                type: "drag",
                name: "logo",
                multiple: false,
                "show-upload-list": false,
                headers: {
                  "x-csrf-token": _vm.token,
                  "X-Requested-With": "XMLHttpRequest"
                },
                "before-upload": _vm.handleBeforeUpload,
                "on-success": _vm.handleSuccess,
                "on-error": _vm.handleError,
                format: ["jpg", "jpeg", "png"],
                "max-size": 2048,
                "on-format-error": _vm.handleFormatError,
                "on-exceeded-size": _vm.handleMaxSize,
                action: ""
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
                        "text-danger": _vm.editBrandData.errors.has("logo")
                      }
                    },
                    [_vm._v("Click or drag files here to upload")]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _vm.editBrandData.logo
            ? _c("div", { staticClass: "demo-upload-list" }, [
                _c("img", {
                  staticStyle: { width: "10rem", height: "6rem" },
                  attrs: { src: "" + _vm.editBrandData.logo }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "demo-upload-list-cover" },
                  [
                    _c("Icon", {
                      attrs: { type: "ios-camera-outline", size: "large" },
                      on: {
                        click: function($event) {
                          return _vm.HANDLE_VIEW(false)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("Icon", {
                      attrs: { type: "ios-trash-outline", size: "large" },
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
            "Modal",
            {
              attrs: { closable: false },
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
                  src: _vm.editBrandData.logo,
                  alt: _vm.editBrandData.name
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
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
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "success",
                    disabled: _vm.editBrandData.busy,
                    loading: _vm.editBrandData.busy
                  },
                  on: { click: _vm.updateBrand }
                },
                [
                  _vm._v(
                    _vm._s(
                      _vm.editBrandData.busy
                        ? _vm.$t("brands.editing")
                        : _vm.$t("brands.edit")
                    )
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/showAllData.vue?vue&type=template&id=425f7942&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/components/showAllData.vue?vue&type=template&id=425f7942& ***!
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
    "div",
    { staticClass: "col-md-12" },
    [
      _vm.isPermitted("delete", "brand") && _vm.multiSelected.length !== 0
        ? _c(
            "span",
            { staticClass: "m-2 " },
            [
              _c(
                "Button",
                { attrs: { type: "error" }, on: { click: _vm.multiDelete } },
                [_vm._v(" Multiple " + _vm._s(_vm.$t("delete")) + " ")]
              ),
              _vm._v(
                " " + _vm._s(_vm.multiSelected.length) + " selected\n     "
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.getAllBrand.length
        ? _c("Table", {
            ref: "selection",
            attrs: {
              border: "",
              columns: _vm.dataStructureTable,
              loading: _vm.isLoading,
              data: _vm.getAllBrand
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/pages/brands.vue?vue&type=template&id=46a9cf44&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/brands/pages/brands.vue?vue&type=template&id=46a9cf44& ***!
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
  return _c(
    "main",
    { staticClass: "app-content", attrs: { id: "app" } },
    [
      _c(
        "div",
        {
          staticClass: "app-title",
          class: _vm.getIsDark ? "app-title-dark" : "app-title"
        },
        [
          _c("div", [
            _c("h1", [
              _c("i", { staticClass: "fa fa-cogs" }),
              _vm._v(" " + _vm._s(_vm.$t("brands.name")) + " ")
            ]),
            _vm._v(" "),
            _c("p", [_vm._v(" List of all brands ")])
          ]),
          _vm._v(" "),
          _vm.isPermitted("create", "brand")
            ? _c("add-modal-component")
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row " },
        [
          _c("filter-data", {
            attrs: { defaultFilter: _vm.filterString, getResult: _vm.getBrands }
          }),
          _vm._v(" "),
          _vm.isPermitted("view", "brand") ? _c("show-all-data") : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.isPermitted("update", "brand") ? _c("edit-modal-component") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/modules/brands/components/addModalComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/modules/brands/components/addModalComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addModalComponent_vue_vue_type_template_id_361eb365___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addModalComponent.vue?vue&type=template&id=361eb365& */ "./resources/js/modules/brands/components/addModalComponent.vue?vue&type=template&id=361eb365&");
/* harmony import */ var _addModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addModalComponent.vue?vue&type=script&lang=js& */ "./resources/js/modules/brands/components/addModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _addModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addModalComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/modules/brands/components/addModalComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _addModalComponent_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addModalComponent.vue?vue&type=custom&index=0&blockType=i18n */ "./resources/js/modules/brands/components/addModalComponent.vue?vue&type=custom&index=0&blockType=i18n");
/* harmony import */ var _addModalComponent_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_addModalComponent_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addModalComponent_vue_vue_type_template_id_361eb365___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addModalComponent_vue_vue_type_template_id_361eb365___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _addModalComponent_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') _addModalComponent_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/brands/components/addModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/brands/components/addModalComponent.vue?vue&type=custom&index=0&blockType=i18n":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/modules/brands/components/addModalComponent.vue?vue&type=custom&index=0&blockType=i18n ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/modules/brands/components/addModalComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/modules/brands/components/addModalComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addModalComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/brands/components/addModalComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/modules/brands/components/addModalComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addModalComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/brands/components/addModalComponent.vue?vue&type=template&id=361eb365&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/modules/brands/components/addModalComponent.vue?vue&type=template&id=361eb365& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_template_id_361eb365___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addModalComponent.vue?vue&type=template&id=361eb365& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/addModalComponent.vue?vue&type=template&id=361eb365&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_template_id_361eb365___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addModalComponent_vue_vue_type_template_id_361eb365___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/brands/components/editModalComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/modules/brands/components/editModalComponent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editModalComponent_vue_vue_type_template_id_72b3a516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editModalComponent.vue?vue&type=template&id=72b3a516& */ "./resources/js/modules/brands/components/editModalComponent.vue?vue&type=template&id=72b3a516&");
/* harmony import */ var _editModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editModalComponent.vue?vue&type=script&lang=js& */ "./resources/js/modules/brands/components/editModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editModalComponent_vue_vue_type_template_id_72b3a516___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editModalComponent_vue_vue_type_template_id_72b3a516___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/brands/components/editModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/brands/components/editModalComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/modules/brands/components/editModalComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editModalComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/editModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/brands/components/editModalComponent.vue?vue&type=template&id=72b3a516&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/modules/brands/components/editModalComponent.vue?vue&type=template&id=72b3a516& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editModalComponent_vue_vue_type_template_id_72b3a516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editModalComponent.vue?vue&type=template&id=72b3a516& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/editModalComponent.vue?vue&type=template&id=72b3a516&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editModalComponent_vue_vue_type_template_id_72b3a516___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editModalComponent_vue_vue_type_template_id_72b3a516___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/brands/components/showAllData.vue":
/*!****************************************************************!*\
  !*** ./resources/js/modules/brands/components/showAllData.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showAllData_vue_vue_type_template_id_425f7942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showAllData.vue?vue&type=template&id=425f7942& */ "./resources/js/modules/brands/components/showAllData.vue?vue&type=template&id=425f7942&");
/* harmony import */ var _showAllData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showAllData.vue?vue&type=script&lang=js& */ "./resources/js/modules/brands/components/showAllData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _showAllData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showAllData_vue_vue_type_template_id_425f7942___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showAllData_vue_vue_type_template_id_425f7942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/brands/components/showAllData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/brands/components/showAllData.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/modules/brands/components/showAllData.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showAllData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/showAllData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/brands/components/showAllData.vue?vue&type=template&id=425f7942&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/modules/brands/components/showAllData.vue?vue&type=template&id=425f7942& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllData_vue_vue_type_template_id_425f7942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showAllData.vue?vue&type=template&id=425f7942& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/components/showAllData.vue?vue&type=template&id=425f7942&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllData_vue_vue_type_template_id_425f7942___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllData_vue_vue_type_template_id_425f7942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/brands/pages/brands.vue":
/*!******************************************************!*\
  !*** ./resources/js/modules/brands/pages/brands.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brands_vue_vue_type_template_id_46a9cf44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands.vue?vue&type=template&id=46a9cf44& */ "./resources/js/modules/brands/pages/brands.vue?vue&type=template&id=46a9cf44&");
/* harmony import */ var _brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brands.vue?vue&type=script&lang=js& */ "./resources/js/modules/brands/pages/brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _brands_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brands.vue?vue&type=style&index=0&lang=css& */ "./resources/js/modules/brands/pages/brands.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _brands_vue_vue_type_template_id_46a9cf44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _brands_vue_vue_type_template_id_46a9cf44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/brands/pages/brands.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/brands/pages/brands.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/modules/brands/pages/brands.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./brands.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/pages/brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/brands/pages/brands.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/modules/brands/pages/brands.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./brands.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/pages/brands.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/brands/pages/brands.vue?vue&type=template&id=46a9cf44&":
/*!*************************************************************************************!*\
  !*** ./resources/js/modules/brands/pages/brands.vue?vue&type=template&id=46a9cf44& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_template_id_46a9cf44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./brands.vue?vue&type=template&id=46a9cf44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/brands/pages/brands.vue?vue&type=template&id=46a9cf44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_template_id_46a9cf44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brands_vue_vue_type_template_id_46a9cf44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);