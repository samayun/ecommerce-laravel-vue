(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Admin-Settings"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/settings/pages/settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/settings/pages/settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    document.title = 'Settings';
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/settings/pages/settings.vue?vue&type=template&id=94b4bc38&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/settings/pages/settings.vue?vue&type=template&id=94b4bc38& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("main", { staticClass: "app-content", attrs: { id: "app" } }, [
      _c("div", { staticClass: "app-title" }, [
        _c("div", [
          _c("h1", [
            _c("i", { staticClass: "fa fa-cogs" }),
            _vm._v(" Settings")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row user" }, [
        _c("div", { staticClass: "col-md-3" }, [
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
                    attrs: { href: "#site-logo", "data-toggle": "tab" }
                  },
                  [_vm._v("Site Logo")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: { href: "#footer-seo", "data-toggle": "tab" }
                  },
                  [_vm._v("Footer & SEO")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: { href: "#social-links", "data-toggle": "tab" }
                  },
                  [_vm._v("Social Links")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: { href: "#analytics", "data-toggle": "tab" }
                  },
                  [_vm._v("Analytics")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: { href: "#payments", "data-toggle": "tab" }
                  },
                  [_vm._v("Payments")]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-9" }, [
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              { staticClass: "tab-pane active", attrs: { id: "general" } },
              [
                _c("div", { staticClass: "tile" }, [
                  _c(
                    "form",
                    {
                      attrs: {
                        action: "http://127.0.0.1:8000/admin/settings",
                        method: "POST",
                        role: "form"
                      }
                    },
                    [
                      _c("input", {
                        attrs: {
                          type: "hidden",
                          name: "_token",
                          value: "0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ"
                        }
                      }),
                      _vm._v(" "),
                      _c("h3", { staticClass: "tile-title" }, [
                        _vm._v("General Settings")
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-body" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "site_name" }
                            },
                            [_vm._v("Site Name")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter site name",
                              id: "site_name",
                              name: "site_name",
                              value: "EShop BD"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "site_title" }
                            },
                            [_vm._v("Site Title")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter site title",
                              id: "site_title",
                              name: "site_title",
                              value: "E-Commerce"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "default_email_address" }
                            },
                            [_vm._v("Default Email Address")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              placeholder: "Enter store default email address",
                              id: "default_email_address",
                              name: "default_email_address",
                              value: "admin@admin.com"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "currency_code" }
                            },
                            [_vm._v("Currency Code")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter store currency code",
                              id: "currency_code",
                              name: "currency_code",
                              value: "GBP"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "currency_symbol" }
                            },
                            [_vm._v("Currency Symbol")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter store currency symbol",
                              id: "currency_symbol",
                              name: "currency_symbol",
                              value: "৳"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-footer" }, [
                        _c("div", { staticClass: "row d-print-none mt-2" }, [
                          _c("div", { staticClass: "col-12 text-right" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: { type: "submit" }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-fw fa-lg fa-check-circle"
                                }),
                                _vm._v("Update Settings")
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-pane fade", attrs: { id: "site-logo" } },
              [
                _c("div", { staticClass: "tile" }, [
                  _c(
                    "form",
                    {
                      attrs: {
                        action: "http://127.0.0.1:8000/admin/settings",
                        method: "POST",
                        role: "form",
                        enctype: "multipart/form-data"
                      }
                    },
                    [
                      _c("input", {
                        attrs: {
                          type: "hidden",
                          name: "_token",
                          value: "0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ"
                        }
                      }),
                      _vm._v(" "),
                      _c("h3", { staticClass: "tile-title" }, [
                        _vm._v("Site Logo")
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-3" }, [
                            _c("img", {
                              staticStyle: { width: "80px", height: "auto" },
                              attrs: {
                                src:
                                  "http://127.0.0.1:8000/storage/img/TtsSyuyDeemGKfTNJPPXfa3ju.png",
                                id: "logoImg"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-9" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { staticClass: "control-label" }, [
                                _vm._v("Site Logo")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "file",
                                  name: "site_logo",
                                  onchange: "loadFile(event,'logoImg')"
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mt-4" }, [
                          _c("div", { staticClass: "col-3" }, [
                            _c("img", {
                              staticStyle: { width: "80px", height: "auto" },
                              attrs: {
                                src:
                                  "http://127.0.0.1:8000/storage/img/m16MzwiOpigkNKVj1Unxodyv4.ico",
                                id: "faviconImg"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-9" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { staticClass: "control-label" }, [
                                _vm._v("Site Favicon")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "file",
                                  name: "site_favicon",
                                  onchange: "loadFile(event,'faviconImg')"
                                }
                              })
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-footer" }, [
                        _c("div", { staticClass: "row d-print-none mt-2" }, [
                          _c("div", { staticClass: "col-12 text-right" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: { type: "submit" }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-fw fa-lg fa-check-circle"
                                }),
                                _vm._v("Update Settings")
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-pane fade", attrs: { id: "footer-seo" } },
              [
                _c("div", { staticClass: "tile" }, [
                  _c(
                    "form",
                    {
                      attrs: {
                        action: "http://127.0.0.1:8000/admin/settings",
                        method: "POST",
                        role: "form"
                      }
                    },
                    [
                      _c("input", {
                        attrs: {
                          type: "hidden",
                          name: "_token",
                          value: "0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ"
                        }
                      }),
                      _vm._v(" "),
                      _c("h3", { staticClass: "tile-title" }, [
                        _vm._v("Footer & SEO")
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-body" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "footer_copyright_text" }
                            },
                            [_vm._v("Footer Copyright Text")]
                          ),
                          _vm._v(" "),
                          _c(
                            "textarea",
                            {
                              staticClass: "form-control",
                              attrs: {
                                rows: "4",
                                placeholder: "Enter footer copyright text",
                                id: "footer_copyright_text",
                                name: "footer_copyright_text"
                              }
                            },
                            [_vm._v("SMC 2021")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "seo_meta_title" }
                            },
                            [_vm._v("SEO Meta Title")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter seo meta title for store",
                              id: "seo_meta_title",
                              name: "seo_meta_title",
                              value: "fotetr dummy"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "seo_meta_description" }
                            },
                            [_vm._v("SEO Meta Description")]
                          ),
                          _vm._v(" "),
                          _c(
                            "textarea",
                            {
                              staticClass: "form-control",
                              attrs: {
                                rows: "4",
                                placeholder:
                                  "Enter seo meta description for store",
                                id: "seo_meta_description",
                                name: "seo_meta_description"
                              }
                            },
                            [_vm._v("sdfd")]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-footer" }, [
                        _c("div", { staticClass: "row d-print-none mt-2" }, [
                          _c("div", { staticClass: "col-12 text-right" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: { type: "submit" }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-fw fa-lg fa-check-circle"
                                }),
                                _vm._v("Update Settings")
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-pane fade", attrs: { id: "social-links" } },
              [
                _c("div", { staticClass: "tile" }, [
                  _c(
                    "form",
                    {
                      attrs: {
                        action: "http://127.0.0.1:8000/admin/settings",
                        method: "POST",
                        role: "form"
                      }
                    },
                    [
                      _c("input", {
                        attrs: {
                          type: "hidden",
                          name: "_token",
                          value: "0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ"
                        }
                      }),
                      _vm._v(" "),
                      _c("h3", { staticClass: "tile-title" }, [
                        _vm._v("Social Links")
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-body" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "social_facebook" }
                            },
                            [_vm._v("Facebook Profile")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter facebook profile link",
                              id: "social_facebook",
                              name: "social_facebook",
                              value: "facebook.com/samayunmc"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "social_twitter" }
                            },
                            [_vm._v("Twitter Profile")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter twitter profile link",
                              id: "social_twitter",
                              name: "social_twitter",
                              value: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "social_instagram" }
                            },
                            [_vm._v("Instagram Profile")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter instagram profile link",
                              id: "social_instagram",
                              name: "social_instagram",
                              value: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "social_linkedin" }
                            },
                            [_vm._v("LinkedIn Profile")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter linkedin profile link",
                              id: "social_linkedin",
                              name: "social_linkedin",
                              value: ""
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-footer" }, [
                        _c("div", { staticClass: "row d-print-none mt-2" }, [
                          _c("div", { staticClass: "col-12 text-right" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: { type: "submit" }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-fw fa-lg fa-check-circle"
                                }),
                                _vm._v("Update Settings")
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-pane fade", attrs: { id: "analytics" } },
              [
                _c("div", { staticClass: "tile" }, [
                  _c(
                    "form",
                    {
                      attrs: {
                        action: "http://127.0.0.1:8000/admin/settings",
                        method: "POST",
                        role: "form"
                      }
                    },
                    [
                      _c("input", {
                        attrs: {
                          type: "hidden",
                          name: "_token",
                          value: "0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ"
                        }
                      }),
                      _vm._v(" "),
                      _c("h3", { staticClass: "tile-title" }, [
                        _vm._v("Analytics")
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-body" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "google_analytics" }
                            },
                            [_vm._v("Google Analytics Code")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            staticClass: "form-control",
                            attrs: {
                              rows: "4",
                              placeholder: "Enter google analytics code",
                              id: "google_analytics",
                              name: "google_analytics"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "facebook_pixels" }
                            },
                            [_vm._v("Facebook Pixel Code")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            staticClass: "form-control",
                            attrs: {
                              rows: "4",
                              placeholder: "Enter facebook pixel code",
                              id: "facebook_pixels",
                              name: "facebook_pixels"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-footer" }, [
                        _c("div", { staticClass: "row d-print-none mt-2" }, [
                          _c("div", { staticClass: "col-12 text-right" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: { type: "submit" }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-fw fa-lg fa-check-circle"
                                }),
                                _vm._v("Update Settings")
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-pane fade", attrs: { id: "payments" } },
              [
                _c("div", { staticClass: "tile" }, [
                  _c(
                    "form",
                    {
                      attrs: {
                        action: "http://127.0.0.1:8000/admin/settings",
                        method: "POST",
                        role: "form"
                      }
                    },
                    [
                      _c("input", {
                        attrs: {
                          type: "hidden",
                          name: "_token",
                          value: "0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ"
                        }
                      }),
                      _vm._v(" "),
                      _c("h3", { staticClass: "tile-title" }, [
                        _vm._v("Payment Settings")
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-body" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "stripe_payment_method" }
                            },
                            [_vm._v("Stripe Payment Method")]
                          ),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              staticClass: "form-control",
                              attrs: {
                                name: "stripe_payment_method",
                                id: "stripe_payment_method"
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { value: "1", selected: "" } },
                                [_vm._v("Enabled")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "0" } }, [
                                _vm._v("Disabled")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "stripe_key" }
                            },
                            [_vm._v("Key")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter stripe key",
                              id: "stripe_key",
                              name: "stripe_key",
                              value: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group pb-2" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "stripe_secret_key" }
                            },
                            [_vm._v("Secret Key")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter stripe secret key",
                              id: "stripe_secret_key",
                              name: "stripe_secret_key",
                              value: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group pt-2" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "paypal_payment_method" }
                            },
                            [_vm._v("PayPal Payment Method")]
                          ),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              staticClass: "form-control",
                              attrs: {
                                name: "paypal_payment_method",
                                id: "paypal_payment_method"
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { value: "1", selected: "" } },
                                [_vm._v("Enabled")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "0" } }, [
                                _vm._v("Disabled")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "paypal_client_id" }
                            },
                            [_vm._v("Client ID")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter paypal client Id",
                              id: "paypal_client_id",
                              name: "paypal_client_id",
                              value: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "paypal_secret_id" }
                            },
                            [_vm._v("Secret ID")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter paypal secret id",
                              id: "paypal_secret_id",
                              name: "paypal_secret_id",
                              value: ""
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "tile-footer" }, [
                        _c("div", { staticClass: "row d-print-none mt-2" }, [
                          _c("div", { staticClass: "col-12 text-right" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: { type: "submit" }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-fw fa-lg fa-check-circle"
                                }),
                                _vm._v("Update Settings")
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ]
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

/***/ "./resources/js/modules/settings/pages/settings.vue":
/*!**********************************************************!*\
  !*** ./resources/js/modules/settings/pages/settings.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_vue_vue_type_template_id_94b4bc38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=94b4bc38& */ "./resources/js/modules/settings/pages/settings.vue?vue&type=template&id=94b4bc38&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./resources/js/modules/settings/pages/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_94b4bc38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _settings_vue_vue_type_template_id_94b4bc38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/settings/pages/settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/settings/pages/settings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/modules/settings/pages/settings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/settings/pages/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/settings/pages/settings.vue?vue&type=template&id=94b4bc38&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/modules/settings/pages/settings.vue?vue&type=template&id=94b4bc38& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_94b4bc38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=template&id=94b4bc38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/settings/pages/settings.vue?vue&type=template&id=94b4bc38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_94b4bc38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_94b4bc38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);