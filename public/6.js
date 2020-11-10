(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/settings/pages/settings.vue?vue&type=template&id=2c50d7a4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/modules/settings/pages/settings.vue?vue&type=template&id=2c50d7a4& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "side-body padding-top" }, [
      _c("h1", { staticClass: "page-title" }, [
        _c("i", { staticClass: "voyager-news" }),
        _vm._v("\n        Add Post\n    ")
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "voyager-notifications" } }),
      _vm._v(" "),
      _c("div", { staticClass: "page-content container-fluid" }, [
        _c(
          "form",
          {
            staticClass: "form-edit-add",
            attrs: {
              role: "form",
              action: "http://127.0.0.1:8001/admin/posts",
              method: "POST",
              enctype: "multipart/form-data"
            }
          },
          [
            _c("input", {
              attrs: {
                type: "hidden",
                name: "_token",
                value: "4ycC1ueTtCRilX4eYiD1elfQSoesqRMcugT4cq1d"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-8" }, [
                _c("div", { staticClass: "panel" }, [
                  _c("div", { staticClass: "panel-heading" }, [
                    _c("h3", { staticClass: "panel-title" }, [
                      _c("i", { staticClass: "voyager-character" }),
                      _vm._v(" Post Title\n                                "),
                      _c("span", { staticClass: "panel-desc" }, [
                        _vm._v(" The title for your post")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "panel-actions" }, [
                      _c("a", {
                        staticClass: "panel-action voyager-angle-down",
                        attrs: {
                          "data-toggle": "panel-collapse",
                          "aria-hidden": "true"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "title",
                        name: "title",
                        placeholder: "Title",
                        value: ""
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel" }, [
                  _c("div", { staticClass: "panel-heading" }, [
                    _c("h3", { staticClass: "panel-title" }, [
                      _vm._v("Post Content")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "panel-actions" }, [
                      _c("a", {
                        staticClass: "panel-action voyager-resize-full",
                        attrs: {
                          "data-toggle": "panel-fullscreen",
                          "aria-hidden": "true"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body" }, [
                    _c(
                      "div",
                      {
                        staticClass: "mce-tinymce mce-container mce-panel",
                        staticStyle: {
                          visibility: "hidden",
                          "border-width": "1px",
                          width: "100%"
                        },
                        attrs: {
                          id: "mceu_17",
                          hidefocus: "1",
                          tabindex: "-1",
                          role: "application"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "mce-container-body mce-stack-layout",
                            attrs: { id: "mceu_17-body" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mce-top-part mce-container mce-stack-layout-item mce-first",
                                attrs: { id: "mceu_18" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "mce-container-body",
                                    attrs: { id: "mceu_18-body" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "mce-toolbar-grp mce-container mce-panel mce-first mce-last",
                                        attrs: {
                                          id: "mceu_19",
                                          hidefocus: "1",
                                          tabindex: "-1",
                                          role: "group"
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "mce-container-body mce-stack-layout",
                                            attrs: { id: "mceu_19-body" }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "mce-container mce-toolbar mce-stack-layout-item mce-first mce-last",
                                                attrs: {
                                                  id: "mceu_20",
                                                  role: "toolbar"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "mce-container-body mce-flow-layout",
                                                    attrs: {
                                                      id: "mceu_20-body"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "mce-container mce-flow-layout-item mce-first mce-btn-group",
                                                        attrs: {
                                                          id: "mceu_21",
                                                          role: "group"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            attrs: {
                                                              id: "mceu_21-body"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-menubtn mce-first mce-btn-has-text",
                                                                attrs: {
                                                                  id: "mceu_0",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-labelledby":
                                                                    "mceu_0",
                                                                  role:
                                                                    "button",
                                                                  "aria-haspopup":
                                                                    "true"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_0-open",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "mce-txt"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Formats"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-caret"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn",
                                                                attrs: {
                                                                  id: "mceu_1",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-pressed":
                                                                    "false",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Bold"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_1-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-bold"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn",
                                                                attrs: {
                                                                  id: "mceu_2",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-pressed":
                                                                    "false",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Italic"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_2-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-italic"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-last",
                                                                attrs: {
                                                                  id: "mceu_3",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-pressed":
                                                                    "false",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Underline"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_3-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-underline"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "mce-container mce-flow-layout-item mce-btn-group",
                                                        attrs: {
                                                          id: "mceu_22",
                                                          role: "group"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            attrs: {
                                                              id: "mceu_22-body"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-splitbtn mce-colorbutton mce-first",
                                                                attrs: {
                                                                  id: "mceu_4",
                                                                  role:
                                                                    "button",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-haspopup":
                                                                    "true",
                                                                  "aria-label":
                                                                    "Text color"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      role:
                                                                        "presentation",
                                                                      hidefocus:
                                                                        "1",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-forecolor"
                                                                    }),
                                                                    _c("span", {
                                                                      staticClass:
                                                                        "mce-preview",
                                                                      attrs: {
                                                                        id:
                                                                          "mceu_4-preview"
                                                                      }
                                                                    })
                                                                  ]
                                                                ),
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "mce-open",
                                                                    attrs: {
                                                                      type:
                                                                        "button",
                                                                      hidefocus:
                                                                        "1",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-caret"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-splitbtn mce-colorbutton mce-last",
                                                                attrs: {
                                                                  id: "mceu_5",
                                                                  role:
                                                                    "button",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-haspopup":
                                                                    "true",
                                                                  "aria-label":
                                                                    "Background color"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      role:
                                                                        "presentation",
                                                                      hidefocus:
                                                                        "1",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-backcolor"
                                                                    }),
                                                                    _c("span", {
                                                                      staticClass:
                                                                        "mce-preview",
                                                                      attrs: {
                                                                        id:
                                                                          "mceu_5-preview"
                                                                      }
                                                                    })
                                                                  ]
                                                                ),
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "mce-open",
                                                                    attrs: {
                                                                      type:
                                                                        "button",
                                                                      hidefocus:
                                                                        "1",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-caret"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "mce-container mce-flow-layout-item mce-btn-group",
                                                        attrs: {
                                                          id: "mceu_23",
                                                          role: "group"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            attrs: {
                                                              id: "mceu_23-body"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-first",
                                                                attrs: {
                                                                  id: "mceu_6",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-pressed":
                                                                    "false",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Align left"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_6-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-alignleft"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn",
                                                                attrs: {
                                                                  id: "mceu_7",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-pressed":
                                                                    "false",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Align center"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_7-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-aligncenter"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-last",
                                                                attrs: {
                                                                  id: "mceu_8",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-pressed":
                                                                    "false",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Align right"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_8-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-alignright"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "mce-container mce-flow-layout-item mce-btn-group",
                                                        attrs: {
                                                          id: "mceu_24",
                                                          role: "group"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            attrs: {
                                                              id: "mceu_24-body"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-first",
                                                                attrs: {
                                                                  id: "mceu_9",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-pressed":
                                                                    "false",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Bullet list"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_9-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-bullist"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn",
                                                                attrs: {
                                                                  id: "mceu_10",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-pressed":
                                                                    "false",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Numbered list"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_10-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-numlist"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn",
                                                                attrs: {
                                                                  id: "mceu_11",
                                                                  tabindex:
                                                                    "-1",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Decrease indent"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_11-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-outdent"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-last",
                                                                attrs: {
                                                                  id: "mceu_12",
                                                                  tabindex:
                                                                    "-1",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Increase indent"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_12-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-indent"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "mce-container mce-flow-layout-item mce-btn-group",
                                                        attrs: {
                                                          id: "mceu_25",
                                                          role: "group"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            attrs: {
                                                              id: "mceu_25-body"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-first",
                                                                attrs: {
                                                                  id: "mceu_13",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-pressed":
                                                                    "false",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Insert/edit link"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_13-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-link"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn",
                                                                attrs: {
                                                                  id: "mceu_14",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-pressed":
                                                                    "false",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Insert/edit image"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_14-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-image"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-menubtn mce-last",
                                                                attrs: {
                                                                  id: "mceu_15",
                                                                  tabindex:
                                                                    "-1",
                                                                  "aria-labelledby":
                                                                    "mceu_15",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Table",
                                                                  "aria-haspopup":
                                                                    "true"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_15-open",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-table"
                                                                    }),
                                                                    _vm._v(" "),
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-caret"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "mce-container mce-flow-layout-item mce-last mce-btn-group",
                                                        attrs: {
                                                          id: "mceu_26",
                                                          role: "group"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            attrs: {
                                                              id: "mceu_26-body"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mce-widget mce-btn mce-first mce-last",
                                                                attrs: {
                                                                  id: "mceu_16",
                                                                  tabindex:
                                                                    "-1",
                                                                  role:
                                                                    "button",
                                                                  "aria-label":
                                                                    "Source code"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "mceu_16-button",
                                                                      role:
                                                                        "presentation",
                                                                      type:
                                                                        "button",
                                                                      tabindex:
                                                                        "-1"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "mce-ico mce-i-code"
                                                                    })
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mce-edit-area mce-container mce-panel mce-stack-layout-item",
                                staticStyle: { "border-width": "1px 0px 0px" },
                                attrs: {
                                  id: "mceu_27",
                                  hidefocus: "1",
                                  tabindex: "-1",
                                  role: "group"
                                }
                              },
                              [
                                _c("iframe", {
                                  staticStyle: {
                                    width: "100%",
                                    height: "600px",
                                    display: "block"
                                  },
                                  attrs: {
                                    id: "richtextbody_ifr",
                                    allowtransparency: "true",
                                    title:
                                      "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help",
                                    frameborder: "0"
                                  }
                                })
                              ]
                            ),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last",
                                staticStyle: { "border-width": "1px 0px 0px" },
                                attrs: {
                                  id: "mceu_28",
                                  hidefocus: "1",
                                  tabindex: "-1",
                                  role: "group"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mce-container-body mce-flow-layout",
                                    attrs: { id: "mceu_28-body" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "mce-path mce-flow-layout-item mce-first",
                                        attrs: { id: "mceu_29" }
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "mce-path-item" },
                                          [_vm._v(" ")]
                                        )
                                      ]
                                    ),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "mce-flow-layout-item mce-resizehandle",
                                        attrs: { id: "mceu_30" }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "mce-ico mce-i-resize"
                                        })
                                      ]
                                    ),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "mce-branding mce-widget mce-label mce-flow-layout-item mce-last",
                                        attrs: { id: "mceu_31" }
                                      },
                                      [
                                        _vm._v(" Powered by "),
                                        _c(
                                          "a",
                                          {
                                            attrs: {
                                              href:
                                                "https://www.tiny.cloud/?utm_campaign=editor_referral&utm_medium=poweredby&utm_source=tinymce",
                                              rel: "noopener",
                                              target: "_blank",
                                              role: "presentation",
                                              tabindex: "-1"
                                            }
                                          },
                                          [_vm._v("Tiny")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _c("textarea", {
                      staticClass: "form-control richTextBox",
                      staticStyle: { display: "none" },
                      attrs: {
                        name: "body",
                        id: "richtextbody",
                        "aria-hidden": "true"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel" }, [
                  _c("div", { staticClass: "panel-heading" }, [
                    _c("h3", { staticClass: "panel-title" }, [
                      _vm._v("Excerpt "),
                      _c("small", [_vm._v("Small description of this post")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "panel-actions" }, [
                      _c("a", {
                        staticClass: "panel-action voyager-angle-down",
                        attrs: {
                          "data-toggle": "panel-collapse",
                          "aria-hidden": "true"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body" }, [
                    _c("textarea", {
                      staticClass: "form-control",
                      attrs: { name: "excerpt" }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel" }, [
                  _c("div", { staticClass: "panel-heading" }, [
                    _c("h3", { staticClass: "panel-title" }, [
                      _vm._v("Additional Fields")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "panel-actions" }, [
                      _c("a", {
                        staticClass: "panel-action voyager-angle-down",
                        attrs: {
                          "data-toggle": "panel-collapse",
                          "aria-hidden": "true"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "div",
                  { staticClass: "panel panel panel-bordered panel-warning" },
                  [
                    _c("div", { staticClass: "panel-heading" }, [
                      _c("h3", { staticClass: "panel-title" }, [
                        _c("i", { staticClass: "icon wb-clipboard" }),
                        _vm._v(" Post Details")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "panel-actions" }, [
                        _c("a", {
                          staticClass:
                            "panel-action panel-collapsed voyager-angle-down",
                          attrs: {
                            "data-toggle": "panel-collapse",
                            "aria-hidden": "true"
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "panel-body",
                        staticStyle: { display: "none" }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "slug" } }, [
                            _vm._v("URL slug")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "slug",
                              name: "slug",
                              placeholder: "slug",
                              "data-slug-origin": "title",
                              "data-slug-forceupdate": "true",
                              value: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "status" } }, [
                            _vm._v("Post Status")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              staticClass: "form-control",
                              attrs: { name: "status" }
                            },
                            [
                              _c("option", { attrs: { value: "PUBLISHED" } }, [
                                _vm._v("published")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "DRAFT" } }, [
                                _vm._v("draft")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "PENDING" } }, [
                                _vm._v("pending")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "category_id" } }, [
                            _vm._v("Post Category")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              staticClass: "form-control",
                              attrs: { name: "category_id" }
                            },
                            [
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v("Category 1")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Category 2")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "featured" } }, [
                            _vm._v("Featured")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            attrs: { type: "checkbox", name: "featured" }
                          })
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel panel-bordered panel-primary" },
                  [
                    _c("div", { staticClass: "panel-heading" }, [
                      _c("h3", { staticClass: "panel-title" }, [
                        _c("i", { staticClass: "icon wb-image" }),
                        _vm._v(" Post Image")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "panel-actions" }, [
                        _c("a", {
                          staticClass:
                            "panel-action panel-collapsed voyager-angle-down",
                          attrs: {
                            "data-toggle": "panel-collapse",
                            "aria-hidden": "true"
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "panel-body",
                        staticStyle: { display: "none" }
                      },
                      [_c("input", { attrs: { type: "file", name: "image" } })]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "panel panel-bordered panel-info" }, [
                  _c("div", { staticClass: "panel-heading" }, [
                    _c("h3", { staticClass: "panel-title" }, [
                      _c("i", { staticClass: "icon wb-search" }),
                      _vm._v(" SEO Content")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "panel-actions" }, [
                      _c("a", {
                        staticClass:
                          "panel-action voyager-angle-down panel-collapsed",
                        attrs: {
                          "data-toggle": "panel-collapse",
                          "aria-hidden": "true"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "panel-body",
                      staticStyle: { display: "none" }
                    },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "meta_description" } }, [
                          _vm._v("Meta Description")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          staticClass: "form-control",
                          attrs: { name: "meta_description" }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "meta_keywords" } }, [
                          _vm._v("Meta Keywords")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          staticClass: "form-control",
                          attrs: { name: "meta_keywords" }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "seo_title" } }, [
                          _vm._v("SEO Title")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "seo_title",
                            placeholder: "SEO Title",
                            value: ""
                          }
                        })
                      ])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary pull-right",
                attrs: { type: "submit" }
              },
              [
                _c("i", { staticClass: "icon wb-plus-circle" }),
                _vm._v(" Create New Post                 ")
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("iframe", {
          staticStyle: { display: "none" },
          attrs: { id: "form_target", name: "form_target" }
        }),
        _vm._v(" "),
        _c(
          "form",
          {
            staticStyle: { width: "0", height: "0", overflow: "hidden" },
            attrs: {
              id: "my_form",
              action: "http://127.0.0.1:8001/admin/upload",
              target: "form_target",
              method: "post",
              enctype: "multipart/form-data"
            }
          },
          [
            _c("input", {
              attrs: {
                name: "image",
                id: "upload_file",
                type: "file",
                onchange: "$('#my_form').submit();this.value='';"
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "type_slug",
                id: "type_slug",
                value: "posts"
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "_token",
                value: "4ycC1ueTtCRilX4eYiD1elfQSoesqRMcugT4cq1d"
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade modal-danger",
          attrs: { id: "confirm_delete_modal" }
        },
        [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-hidden": "true"
                    }
                  },
                  [_vm._v("×")]
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "modal-title" }, [
                  _c("i", { staticClass: "voyager-warning" }),
                  _vm._v(" Are you sure")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("h4", [
                  _vm._v("Are you sure you want to delete '"),
                  _c("span", { staticClass: "confirm_delete_name" }),
                  _vm._v("'")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { type: "button", id: "confirm_delete" }
                  },
                  [_vm._v("Yes, Delete it!")]
                )
              ])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/modules/settings/pages/settings.vue":
/*!****************************************************************!*\
  !*** ./resources/js/admin/modules/settings/pages/settings.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_vue_vue_type_template_id_2c50d7a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=2c50d7a4& */ "./resources/js/admin/modules/settings/pages/settings.vue?vue&type=template&id=2c50d7a4&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _settings_vue_vue_type_template_id_2c50d7a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _settings_vue_vue_type_template_id_2c50d7a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/modules/settings/pages/settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/modules/settings/pages/settings.vue?vue&type=template&id=2c50d7a4&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/admin/modules/settings/pages/settings.vue?vue&type=template&id=2c50d7a4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_2c50d7a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=template&id=2c50d7a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/modules/settings/pages/settings.vue?vue&type=template&id=2c50d7a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_2c50d7a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_2c50d7a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);