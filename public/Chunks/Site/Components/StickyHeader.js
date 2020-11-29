(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Site/Components/StickyHeader"],{

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
                  { staticClass: "sf-with-ul", attrs: { to: "/" } },
                  [_vm._v("Home")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: "/products" } }, [
                  _vm._v(" Products ")
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
                      _c("router-link", { attrs: { to: "/about" } }, [
                        _vm._v("About")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/contact" } }, [
                        _vm._v("Contact")
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