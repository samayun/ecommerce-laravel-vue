(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Site-Login"],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/pages/Login.vue?vue&type=template&id=6912b818&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/pages/Login.vue?vue&type=template&id=6912b818& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
                _c(
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
                ),
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
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link active",
                              attrs: {
                                id: "signin-tab",
                                "data-toggle": "tab",
                                href: "#signin",
                                role: "tab",
                                "aria-controls": "signin",
                                "aria-selected": "true"
                              }
                            },
                            [_vm._v("Sign In")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link",
                              attrs: {
                                id: "register-tab",
                                "data-toggle": "tab",
                                href: "#register",
                                role: "tab",
                                "aria-controls": "register",
                                "aria-selected": "false"
                              }
                            },
                            [_vm._v("Register")]
                          )
                        ])
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
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { attrs: { for: "singin-email" } },
                                  [_vm._v("Username or email address *")]
                                ),
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
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { attrs: { for: "singin-password" } },
                                  [_vm._v("Password *")]
                                ),
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
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-footer" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-primary-2",
                                    attrs: { type: "submit" }
                                  },
                                  [
                                    _c("span", [_vm._v("LOG IN")]),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "icon-long-arrow-right"
                                    })
                                  ]
                                ),
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
                                        id: "signin-remember"
                                      }
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
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "forgot-link",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Forgot Your Password?")]
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
                                _c("div", { staticClass: "col-sm-6" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-login btn-g",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", { staticClass: "icon-google" }),
                                      _vm._v(
                                        "\n                                                Login With Google\n                                            "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-sm-6" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-login btn-f",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "icon-facebook-f"
                                      }),
                                      _vm._v(
                                        "\n                                                Login With Facebook\n                                            "
                                      )
                                    ]
                                  )
                                ])
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
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { attrs: { for: "register-email" } },
                                  [_vm._v("Your email address *")]
                                ),
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
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { attrs: { for: "register-password" } },
                                  [_vm._v("Password *")]
                                ),
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
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-footer" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-primary-2",
                                    attrs: { type: "submit" }
                                  },
                                  [
                                    _c("span", [_vm._v("SIGN UP")]),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "icon-long-arrow-right"
                                    })
                                  ]
                                ),
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
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v("privacy policy")
                                        ]),
                                        _vm._v(" *")
                                      ]
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
                                _c("div", { staticClass: "col-sm-6" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-login btn-g",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", { staticClass: "icon-google" }),
                                      _vm._v(
                                        "\n                                                Login With Google\n                                            "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-sm-6" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-login  btn-f",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "icon-facebook-f"
                                      }),
                                      _vm._v(
                                        "\n                                                Login With Facebook\n                                            "
                                      )
                                    ]
                                  )
                                ])
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
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/site/pages/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/site/pages/Login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_6912b818___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=6912b818& */ "./resources/js/site/pages/Login.vue?vue&type=template&id=6912b818&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Login_vue_vue_type_template_id_6912b818___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_6912b818___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site/pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site/pages/Login.vue?vue&type=template&id=6912b818&":
/*!**************************************************************************!*\
  !*** ./resources/js/site/pages/Login.vue?vue&type=template&id=6912b818& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6912b818___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=6912b818& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/pages/Login.vue?vue&type=template&id=6912b818&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6912b818___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6912b818___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);