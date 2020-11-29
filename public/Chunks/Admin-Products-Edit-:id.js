(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Admin-Products-Edit-:id"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/editForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/components/editForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProductEditForm',
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("productsStoreIndex", ['editProductMeta', 'editProductData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("categoriesStoreIndex", ['allcategories'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("brandsStoreIndex", ['getAllBrand'])), {}, {
    imageVisible: {
      get: function get() {
        return this.editProductMeta.isImageVisible;
      },
      set: function set(value) {
        this.HANDLE_VIEW(false);
      }
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("brandsStoreIndex", ['getBrands'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("categoriesStoreIndex", ['getMergedCategories'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("productsStoreIndex", ['getSingleProduct', 'updateProduct', 'handleMaxSize', 'handleFormatError', 'handleSuccess', 'handleBeforeUpload', 'handleError', 'deleteImage', 'HANDLE_VIEW'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("productsStoreIndex", ['TOGGLE_MODAL'])), {}, {
    hanndleSelected: function hanndleSelected(categories) {
      var _this2 = this;

      var _this = this;

      categories.forEach(function (element) {
        var index = _this2.allcategories.findIndex(function (i) {
          return i.id == element.id;
        });

        return _this2.allcategories[index].id == element.id;
      });
    }
  }),
  created: function created() {
    var existProId = this.$store.state.productsStoreIndex.editProductData.id;
    var id = this.$route.params.id;

    if (existProId != id) {
      this.getSingleProduct(id);
      document.title = 'Edit Products';
    }

    if (this.allcategories.length == 0) {
      this.getMergedCategories();
    }

    this.token = window.Laravel.csrfToken;

    if (this.getAllBrand.length == 0) {
      this.getBrands();
    }

    var _this = this;

    $Bus.$on('cleareditedFiles', function () {
      _this.$refs.upload.clearFiles();
    });
    $Bus.$on('redirectToProducts', function () {
      _this.$router.push({
        name: "Products"
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productAttributes.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/components/productAttributes.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "product-attributes",
  props: ['productid'],
  data: function data() {
    return {
      attribute: {},
      attributeSelected: false,
      attributeValues: [],
      value: {},
      valueSelected: false,
      currentAttributeId: '',
      currentValue: '',
      currentQty: '',
      currentPrice: ''
    };
  },
  created: function created() {
    if (this.getAllAttribute.length == 0) {
      this.getAttributes();
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("productsStoreIndex", ['editProductData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("attributesStoreIndex", ['attributes'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("attributesStoreIndex", ['getAllAttribute', 'getAllValue'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("attributesStoreIndex", ['getAttributes'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("productsStoreIndex", ['CREATE_PRODUCT_ATTRIBUTE'])), {}, {
    selectAttribute: function selectAttribute(attribute) {
      var _this = this;

      this.currentAttributeId = attribute.id;
      _this.attributeValues = attribute.values;
      this.attributeSelected = true;
    },
    selectValue: function selectValue(value) {
      this.valueSelected = true;
      this.currentValue = value.name;
      this.currentQty = value.quantity;
      this.currentPrice = value.price;
    },
    addProductAttribute: function addProductAttribute() {
      if (this.currentQty == undefined || this.currentPrice == undefined) {
        this.$Notice.info({
          title: "Error, Some values are missing.",
          desc: "Enter Quantity Or Price"
        });
      } else {
        var _this = this;

        axios.post('/api/admin/product/attributes', {
          attribute_id: this.value,
          quantity: this.currentQty,
          price: this.currentPrice,
          product_id: this.productid
        }).then(function (response) {
          _this.$Notice.success({
            title: "Success! Product Attribute Successfully"
          });

          _this.editProductData.attributes.unshift(response.data); // _this.currentValue = '';


          _this.currentQty = '';
          _this.currentPrice = '';
          _this.valueSelected = false;
        })["catch"](function (error) {
          console.log(error);
        }); // this.loadProductAttributes(this.productid);
      }
    },
    deleteIfPermitted: function deleteIfPermitted(productAttribute) {
      var _this = this;

      this.$Modal.confirm({
        title: '<Icon type="ios-information-circle"></Icon> Are you sure to delete',
        content: "Click OK to proceed",
        onOk: function onOk() {
          _this.deleteProductAttribute(productAttribute);
        }
      });
    },
    deleteProductAttribute: function deleteProductAttribute(productAttribute) {
      var _this = this;

      axios["delete"]("/api/admin/product/attributes/".concat(productAttribute.id)).then(function (response) {
        if (response.status === 200) {
          _this.$Notice.success({
            title: "Success! Product attribute has been deleted!"
          });

          _this.editProductData.attributes = _this.editProductData.attributes.filter(function (i) {
            return productAttribute.id != i.id;
          });
        } else {
          _this.$Notice.error({
            title: "Your Product attribute not deleted!"
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productImages.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/components/productImages.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  naem: "Product Images",
  data: function data() {
    return {
      visible: false,
      productId: "",
      images: new Form({}),
      uploadList: [],
      defaultList: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("productsStoreIndex", ['editProductData'])),
  methods: {
    deleteImage: function deleteImage(item) {
      var _this2 = this;

      axios["delete"]("/api/admin/images/".concat(item.id), {
        productId: item.imageable_id,
        image: item.id
      }).then(function (res) {
        _this2.editProductData.images.splice(_this2.editProductData.images.indexOf(item), 1); //  this.defaultList = res.data.images;
        //  this.$refs.upload.clearFiles();

      })["catch"](function (err) {
        return console.log(err);
      });
    },
    UploadImage: function UploadImage() {
      var _this3 = this;

      axios.post('/api/admin/images', {
        productId: this.productId,
        images: this.uploadList
      }).then(function (res) {
        _this3.uploadList.forEach(function (element) {
          _this3.$refs.upload.fileList.splice(element, 1);
        });

        _this3.editProductData.images = res.data.images;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    handleView: function handleView(item) {
      this.visible = true;
      this.images = item;
    },
    handleRemove: function handleRemove(file) {
      // delete data from the upload instance
      var fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess: function handleSuccess(res, file) {
      this.images = res; // file.url = res;
      // file.name = file;
    },
    handleFormatError: function handleFormatError(file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'file' + file.name + ' The format is incorrect. Please upload a picture in jpg or png format. '
      });
    },
    handleMaxSize: function handleMaxSize(file) {
      this.$Notice.warning({
        Title: 'Exceeded file size limit',
        Desc: 'file' + file.name + ' is too large to exceed 2M. '
      });
    },
    handleBeforeUpload: function handleBeforeUpload(file) {
      var check = this.uploadList.length < 3;

      if (!check) {
        this.$Notice.warning({
          title: 'Up to 3 images can be uploaded at most. '
        });
      }

      var reader = new FileReader();
      reader.readAsDataURL(file);

      var _this = this;

      reader.onloadend = function (e) {
        file.url = reader.result; //    let obj =  {
        //         name: file.name,
        //         type: file.type,
        //         url: file.url,
        //         size: `${file.size /1000} KB`
        //     }

        _this.uploadList.push(file.url);
      };

      return false;
    }
  },
  mounted: function mounted() {
    this.uploadList = this.$refs.upload.fileList;
  },
  created: function created() {
    this.token = window.Laravel.csrfToken;
    this.productId = this.$route.params.id;
    this.defaultList = this.editProductData.images;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/pages/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_editForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/editForm.vue */ "./resources/js/modules/products/components/editForm.vue");
/* harmony import */ var _components_productImages_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/productImages.vue */ "./resources/js/modules/products/components/productImages.vue");
/* harmony import */ var _components_productAttributes_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/productAttributes.vue */ "./resources/js/modules/products/components/productAttributes.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editAndUpdateProduct",
  components: {
    productEditForm: _components_editForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    productImages: _components_productImages_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    productAttributes: _components_productAttributes_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productImages.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/components/productImages.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.demo-upload-list {\n        text-align: center;\n        line-height: 60px;\n        border: 1px solid transparent;\n        border-radius: 4px;\n        overflow: hidden;\n        background: #fff;\n        position: relative;\n        box-shadow: 0 1px 1px rgba(255, 255, 255, 0.87);\n        margin-right: 4px;\n        height: 100%;\n        width: 100%;\n}\n.demo-upload-list img{\n        width: 100%;\n        height: 100%;\n}\n.demo-upload-list-cover{\n        display: none;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background: rgba(0,0,0,.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover {\n        display: inline flow-root list-item;\n        background: #0000004d;\n}\n.demo-upload-list-cover i{\n        color: #fff;\n        font-size: 20px;\n        cursor: pointer;\n        margin: 0 2px;\n}\n    /* .ivu-icon {\n        line-height: 58px;\n    } */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.demo-upload-list{\n\n    text-align: center;\n    line-height: 60px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    box-shadow: 0 1px 1px rgba(0,0,0,.2);\n    margin-right: 4px;\n}\n.demo-upload-list img{\n    width: 100%;\n    height: 100%;\n}\n.demo-upload-list-cover{\n    display: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover{\n    display: block;\n}\n.demo-upload-list-cover i{\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n/* .ivu-icon {\n    line-height: 58px;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productImages.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/components/productImages.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./productImages.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productImages.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/editForm.vue?vue&type=template&id=0e7464a2&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/components/editForm.vue?vue&type=template&id=0e7464a2& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "div",
            {
              staticClass: "tile",
              style: "background: url(" + _vm.editProductData.image + ")"
            },
            [
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
                            attrs: { prefix: "brand.logo" },
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
                                _c("Avatar", {
                                  attrs: {
                                    src: item.logo,
                                    alt: item.name,
                                    size: "small"
                                  }
                                }),
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(item.name) +
                                    " "
                                )
                              ],
                              1
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
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12" }, [
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
                      "Select",
                      {
                        class: {
                          "is-invalid": _vm.editProductData.errors.has(
                            "categories"
                          )
                        },
                        attrs: { multiple: "" },
                        model: {
                          value: _vm.editProductData.categories,
                          callback: function($$v) {
                            _vm.$set(_vm.editProductData, "categories", $$v)
                          },
                          expression: "editProductData.categories"
                        }
                      },
                      _vm._l(_vm.allcategories, function(item, i) {
                        return _c(
                          "Option",
                          {
                            key: item.id,
                            attrs: {
                              value: item.id,
                              tag: item.name,
                              selected: _vm.editProductData.categories
                            }
                          },
                          [
                            _c("Avatar", {
                              attrs: {
                                src: item.icon,
                                alt: item.name,
                                size: "small"
                              }
                            }),
                            _vm._v(
                              "\n                                                " +
                                _vm._s(item.name) +
                                " "
                            )
                          ],
                          1
                        )
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.editProductData, field: "categories" }
                    }),
                    _vm._v(" "),
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
                  ],
                  1
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
                    staticStyle: { display: "none" }
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
                    "\n                " +
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productAttributes.vue?vue&type=template&id=390f63a2&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/components/productAttributes.vue?vue&type=template&id=390f63a2& ***!
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
  return _c("div", [
    _c("div", { staticClass: "tile" }, [
      _c("h3", { staticClass: "tile-title" }, [_vm._v("Attributes")]),
      _vm._v(" "),
      _c("div", { staticClass: "tile-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.attribute,
                      expression: "attribute"
                    }
                  ],
                  staticClass: "form-control custom-select mt-15",
                  attrs: { id: "parent" },
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.attribute = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        return _vm.selectAttribute(_vm.attribute)
                      }
                    ]
                  }
                },
                _vm._l(_vm.attributes, function(attribute) {
                  return _c(
                    "option",
                    { key: attribute.id, domProps: { value: attribute } },
                    [_vm._v(" " + _vm._s(attribute.name) + " ")]
                  )
                }),
                0
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.attributeSelected
      ? _c("div", { staticClass: "tile" }, [
          _c("h3", { staticClass: "tile-title" }, [
            _vm._v("Add Attributes To Product")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.value,
                        expression: "value"
                      }
                    ],
                    staticClass: "form-control custom-select mt-15",
                    attrs: { id: "values" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.value = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        function($event) {
                          return _vm.selectValue(_vm.value)
                        }
                      ]
                    }
                  },
                  _vm._l(_vm.attribute.values, function(value) {
                    return _c(
                      "option",
                      { key: value.id, domProps: { value: value.id } },
                      [_vm._v(" " + _vm._s(value.name) + " ")]
                    )
                  }),
                  0
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.valueSelected
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "form-group" }, [
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
                          value: _vm.currentQty,
                          expression: "currentQty"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number", id: "quantity" },
                      domProps: { value: _vm.currentQty },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.currentQty = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "price" } },
                      [_vm._v("Price")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.currentPrice,
                          expression: "currentPrice"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "price" },
                      domProps: { value: _vm.currentPrice },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.currentPrice = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-danger" }, [
                      _vm._v(
                        "This price will be added to the main price of product on frontend."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary",
                      on: {
                        click: function($event) {
                          return _vm.addProductAttribute()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-plus" }),
                      _vm._v(" Add\n                ")
                    ]
                  )
                ])
              ])
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "tile" }, [
      _c("h3", { staticClass: "tile-title" }, [_vm._v("Product Attributes")]),
      _vm._v(" "),
      _c("div", { staticClass: "tile-body" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c("table", { staticClass: "table table-sm" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.editProductData.attributes, function(pa, i) {
                return _c("tr", { key: i }, [
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "25%" }
                    },
                    [_vm._v(_vm._s(pa.id))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "25%" }
                    },
                    [_vm._v(_vm._s(pa.type.name))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "25%" }
                    },
                    [_vm._v(_vm._s(pa.name))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "25%" }
                    },
                    [_vm._v(_vm._s(pa.quantity))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "25%" }
                    },
                    [_vm._v(_vm._s(pa.price))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "25%" }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-danger",
                          on: {
                            click: function($event) {
                              return _vm.deleteIfPermitted(pa)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-trash" })]
                      )
                    ]
                  )
                ])
              }),
              0
            )
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
    return _c("label", { attrs: { for: "parent" } }, [
      _vm._v("Select an Attribute "),
      _c("span", { staticClass: "m-l-5 text-danger" }, [_vm._v(" *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "values" } }, [
      _vm._v("Select an value "),
      _c("span", { staticClass: "m-l-5 text-danger" }, [_vm._v(" *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "text-center" }, [
        _c("th", [_vm._v("Attribute ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Attribute Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Value")]),
        _vm._v(" "),
        _c("th", [_vm._v("Qty")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productImages.vue?vue&type=template&id=97e7547a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/components/productImages.vue?vue&type=template&id=97e7547a& ***!
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
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.editProductData.images, function(item, i) {
          return _c("div", { key: i, staticClass: "col-md-3" }, [
            _c("div", { staticClass: "demo-upload-list" }, [
              _c("img", {
                staticClass: "w-100",
                attrs: { src: item.url, size: "small" }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "demo-upload-list-cover" },
                [
                  _c("Icon", {
                    attrs: { type: "ios-trash-outline" },
                    on: {
                      click: function($event) {
                        return _vm.deleteImage(item)
                      }
                    }
                  })
                ],
                1
              )
            ])
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "Upload",
        {
          ref: "upload",
          attrs: {
            name: "images",
            headers: {
              "x-csrf-token": _vm.token,
              "X-Requested-With": "XMLHttpRequest"
            },
            "show-upload-list": false,
            multiple: "",
            type: "drag",
            "before-upload": _vm.handleBeforeUpload,
            format: ["jpg", "jpeg", "png"],
            "max-size": 2048,
            "on-format-error": _vm.handleFormatError,
            "on-exceeded-size": _vm.handleMaxSize,
            "on-success": _vm.handleSuccess,
            action: "/api/admin/images"
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
              _c("p", { staticClass: "is-invalid text-danger" }, [
                _vm._v(" " + _vm._s(_vm.$t("click_here_upload")) + " ")
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-upload-list" },
        _vm._l(_vm.uploadList, function(item, i) {
          return _c("span", { key: i }, [
            _c("img", {
              staticClass: "w-25",
              attrs: { src: item, size: "small" }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "demo-upload-list-cover" },
              [
                _c("Icon", {
                  attrs: { type: "ios-eye-outline" },
                  on: {
                    click: function($event) {
                      return _vm.handleView(item)
                    }
                  }
                }),
                _vm._v(" "),
                _c("Icon", {
                  attrs: { type: "ios-trash-outline" },
                  on: {
                    click: function($event) {
                      return _vm.handleRemove(item)
                    }
                  }
                })
              ],
              1
            )
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "View image" },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c("img", {
            staticClass: "w-75",
            attrs: { size: "large", src: _vm.images }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "Button",
        {
          attrs: { type: "success", icon: "ios-upload" },
          on: { click: _vm.UploadImage }
        },
        [_vm._v(" Upload ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/edit.vue?vue&type=template&id=72ff656a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/pages/edit.vue?vue&type=template&id=72ff656a& ***!
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
    _c("div", { staticClass: "row user" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("div", { staticClass: "tab-content" }, [
          _c(
            "div",
            { staticClass: "tab-pane active", attrs: { id: "general" } },
            [_c("product-edit-form")],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tab-pane ", attrs: { id: "images" } },
            [_c("productImages")],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tab-pane ", attrs: { id: "attributes" } },
            [
              _c("product-attributes", {
                attrs: { productid: _vm.$route.params.id }
              })
            ],
            1
          )
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
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "tile p-0" }, [
        _c("ul", { staticClass: "nav flex-column nav-tabs user-tabs" }, [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active",
                attrs: { href: "#general", "data-toggle": "tab" }
              },
              [_vm._v("General")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { href: "#images", "data-toggle": "tab" }
              },
              [_vm._v(" Gallary Images")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { href: "#attributes", "data-toggle": "tab" }
              },
              [_vm._v(" Size & Color Attributes ")]
            )
          ])
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

/***/ "./resources/js/modules/products/components/editForm.vue":
/*!***************************************************************!*\
  !*** ./resources/js/modules/products/components/editForm.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editForm_vue_vue_type_template_id_0e7464a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editForm.vue?vue&type=template&id=0e7464a2& */ "./resources/js/modules/products/components/editForm.vue?vue&type=template&id=0e7464a2&");
/* harmony import */ var _editForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editForm.vue?vue&type=script&lang=js& */ "./resources/js/modules/products/components/editForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editForm_vue_vue_type_template_id_0e7464a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editForm_vue_vue_type_template_id_0e7464a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/products/components/editForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/products/components/editForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/modules/products/components/editForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/editForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/products/components/editForm.vue?vue&type=template&id=0e7464a2&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/modules/products/components/editForm.vue?vue&type=template&id=0e7464a2& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editForm_vue_vue_type_template_id_0e7464a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editForm.vue?vue&type=template&id=0e7464a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/editForm.vue?vue&type=template&id=0e7464a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editForm_vue_vue_type_template_id_0e7464a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editForm_vue_vue_type_template_id_0e7464a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/products/components/productAttributes.vue":
/*!************************************************************************!*\
  !*** ./resources/js/modules/products/components/productAttributes.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productAttributes_vue_vue_type_template_id_390f63a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productAttributes.vue?vue&type=template&id=390f63a2& */ "./resources/js/modules/products/components/productAttributes.vue?vue&type=template&id=390f63a2&");
/* harmony import */ var _productAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productAttributes.vue?vue&type=script&lang=js& */ "./resources/js/modules/products/components/productAttributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _productAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productAttributes_vue_vue_type_template_id_390f63a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productAttributes_vue_vue_type_template_id_390f63a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/products/components/productAttributes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/products/components/productAttributes.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/modules/products/components/productAttributes.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./productAttributes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productAttributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/products/components/productAttributes.vue?vue&type=template&id=390f63a2&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/modules/products/components/productAttributes.vue?vue&type=template&id=390f63a2& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productAttributes_vue_vue_type_template_id_390f63a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./productAttributes.vue?vue&type=template&id=390f63a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productAttributes.vue?vue&type=template&id=390f63a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productAttributes_vue_vue_type_template_id_390f63a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productAttributes_vue_vue_type_template_id_390f63a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/products/components/productImages.vue":
/*!********************************************************************!*\
  !*** ./resources/js/modules/products/components/productImages.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productImages_vue_vue_type_template_id_97e7547a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productImages.vue?vue&type=template&id=97e7547a& */ "./resources/js/modules/products/components/productImages.vue?vue&type=template&id=97e7547a&");
/* harmony import */ var _productImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productImages.vue?vue&type=script&lang=js& */ "./resources/js/modules/products/components/productImages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _productImages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productImages.vue?vue&type=style&index=0&lang=css& */ "./resources/js/modules/products/components/productImages.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _productImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productImages_vue_vue_type_template_id_97e7547a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productImages_vue_vue_type_template_id_97e7547a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/products/components/productImages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/products/components/productImages.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/modules/products/components/productImages.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./productImages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productImages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/products/components/productImages.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/modules/products/components/productImages.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./productImages.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productImages.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/products/components/productImages.vue?vue&type=template&id=97e7547a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/modules/products/components/productImages.vue?vue&type=template&id=97e7547a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_template_id_97e7547a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./productImages.vue?vue&type=template&id=97e7547a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/components/productImages.vue?vue&type=template&id=97e7547a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_template_id_97e7547a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productImages_vue_vue_type_template_id_97e7547a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/products/pages/edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/modules/products/pages/edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_72ff656a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=72ff656a& */ "./resources/js/modules/products/pages/edit.vue?vue&type=template&id=72ff656a&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/modules/products/pages/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_72ff656a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_72ff656a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/products/pages/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/products/pages/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/modules/products/pages/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/products/pages/edit.vue?vue&type=template&id=72ff656a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/modules/products/pages/edit.vue?vue&type=template&id=72ff656a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_72ff656a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=72ff656a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/pages/edit.vue?vue&type=template&id=72ff656a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_72ff656a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_72ff656a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);