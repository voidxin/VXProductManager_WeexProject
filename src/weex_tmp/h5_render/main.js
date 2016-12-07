/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var __weex_template__ = __webpack_require__(3)
	var __weex_style__ = __webpack_require__(4)
	var __weex_script__ = __webpack_require__(5)

	__weex_define__('@weex-component/5963664bb2f19dce71a6e8bd54e12861', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/5963664bb2f19dce71a6e8bd54e12861',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)

	__weex_define__('@weex-component/bottom-line', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_module__.exports.template = __weex_template__

	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "backgroundColor": "rgb(237,237,237)",
	    "height": 1
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "justifyContent": "center",
	            "alignContent": "center",
	            "backgroundColor": "#FFA500",
	            "height": 120
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flex": 0.4,
	                "justifyContent": "center",
	                "alignContent": "center",
	                "marginRight": 15
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 35,
	                    "color": "#FFFFFF",
	                    "textAlign": "right"
	                  },
	                  "attr": {
	                    "value": "全部门店"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "justifyContent": "center",
	                "alignContent": "center"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "backgroundColor": "#808080",
	                    "height": 30,
	                    "width": 1
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flex": 0.6,
	                "justifyContent": "center",
	                "alignContent": "center",
	                "marginLeft": 15
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 35,
	                    "color": "#FFFFFF",
	                    "alignContent": "flex-start"
	                  },
	                  "attr": {
	                    "value": "2010.10.1-2016.10.31 V"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.storedatas},
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "height": 150
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flex": 0.6,
	                    "justifyContent": "center",
	                    "alignContent": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "fontSize": 30,
	                        "marginLeft": 15
	                      },
	                      "attr": {
	                        "value": function () {return this.store}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "flex": 0.3,
	                    "justifyContent": "center",
	                    "alignContent": "flex-end",
	                    "marginRight": function () {return this.checkflag==1?0:15}
	                  },
	                  "events": {
	                    "click": "redirect"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "fontSize": 30,
	                        "color": "#008000",
	                        "textAlign": "right"
	                      },
	                      "attr": {
	                        "value": function () {return this.showflag==1?'查看明细':'无调入调出'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "repeat": function () {return this.showflag==1?this.details3:this.details2},
	                  "style": {
	                    "flex": 0.1,
	                    "justifyContent": "center",
	                    "alignContent": "flex-end"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "marginRight": 15,
	                        "textAlign": "right"
	                      },
	                      "attr": {
	                        "value": ">"
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "bottom-line"
	            },
	            {
	              "type": "div",
	              "repeat": function () {return this.showflag==1?this.details1:this.details2},
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "height": 200,
	                    "justifyContent": "center",
	                    "alignContent": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row",
	                        "marginLeft": 15
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "color": "#808080",
	                            "fontSize": 30,
	                            "flex": 1
	                          },
	                          "attr": {
	                            "value": "调入数量"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "style": {
	                            "color": "#808080",
	                            "fontSize": 30,
	                            "flex": 1
	                          },
	                          "attr": {
	                            "value": "调出数量"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row",
	                        "marginTop": 20,
	                        "marginLeft": 15
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "color": "#808080",
	                            "fontSize": 30,
	                            "flex": 1
	                          },
	                          "attr": {
	                            "value": "调入金额"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "style": {
	                            "color": "#808080",
	                            "fontSize": 30,
	                            "flex": 1
	                          },
	                          "attr": {
	                            "value": "调出金额"
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "bottom-line"
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	    data: function () {return {

	        url: '',

	        storedatas: [{ store: "家乐福南山店", showflag: 1 }, { store: "家乐福南山店", showflag: 0 }, { store: "家乐福南山店", showflag: 0 }, { store: "家乐福南山店", showflag: 0 }, { store: "家乐福南山店", showflag: 0 }],
	        details1: [{}, {}, {}],
	        details2: [],
	        details3: [{}]

	    }},
	    ready: function ready() {},

	    methods: {
	        redirect: function redirect() {
	            this.$openURL('productPortQueryDetail.js');
	        }
	    },
	    created: function created() {}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);