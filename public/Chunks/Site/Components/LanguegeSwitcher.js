(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Site/Components/LanguegeSwitcher"],{

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
                staticClass: "d-flex",
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



/***/ })

}]);