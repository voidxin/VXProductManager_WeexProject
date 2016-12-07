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

	__weex_define__('@weex-component/f5c3c29717c3cc0e9f4614e8a99a81f7', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/f5c3c29717c3cc0e9f4614e8a99a81f7',undefined,undefined)

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
	      "type": "list",
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": function () {return this.groups},
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "backgroundColor": "rgb(237,237,237)",
	                "height": 130,
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "justifyContent": "center",
	                    "alignContent": "center",
	                    "flex": 1
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "#808080",
	                        "fontSize": 35,
	                        "textAlign": "left",
	                        "marginLeft": 15
	                      },
	                      "attr": {
	                        "value": function () {return this.transferredInAndOutDate}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "justifyContent": "center",
	                    "alignContent": "center",
	                    "flex": 1
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "color": "#808080",
	                        "fontSize": 35,
	                        "textAlign": "right",
	                        "marginRight": 15
	                      },
	                      "attr": {
	                        "value": function () {return '调拨人:' + (this.transferredPerson)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "height": 220,
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flex": 0.4,
	                    "marginTop": 15
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "marginLeft": 15,
	                            "fontSize": 35,
	                            "color": "#808080"
	                          },
	                          "attr": {
	                            "value": "调出门店"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginTop": 30,
	                        "height": 100
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "marginLeft": 15,
	                            "fontSize": 35
	                          },
	                          "attr": {
	                            "value": function () {return this.transferredOutStoreName}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "flex": 0.2,
	                    "justifyContent": "center",
	                    "flexDirection": "row"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginTop": 80
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": function () {return this.nextIcon}
	                          },
	                          "style": {
	                            "height": 40,
	                            "width": 40
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "flex": 0.4
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginTop": 15
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "textAlign": "right",
	                            "marginRight": 15,
	                            "fontSize": 35,
	                            "color": "#808080"
	                          },
	                          "attr": {
	                            "value": "调入门店"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginTop": 30
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "textAlign": "right",
	                            "marginRight": 15,
	                            "height": 100,
	                            "fontSize": 35
	                          },
	                          "attr": {
	                            "value": function () {return this.transferredInStoreName}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "height": 1,
	                "backgroundColor": "rgb(237,237,237)"
	              }
	            },
	            {
	              "type": "div",
	              "repeat": function () {return this.productTransferredInAndOutNumList},
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row",
	                    "justifyContent": "center",
	                    "alignContent": "center",
	                    "height": 120
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "flex": 0.8,
	                        "marginLeft": 15,
	                        "justifyContent": "center"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 35,
	                            "color": "#808080"
	                          },
	                          "attr": {
	                            "value": function () {return (this.fixedProduct.productName) + '(' + (this.fixedProduct.productCode) + ')'}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "flex": 0.2,
	                        "marginLeft": 15,
	                        "justifyContent": "center"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 35,
	                            "textAlign": "right",
	                            "marginRight": 15,
	                            "color": "#808080"
	                          },
	                          "attr": {
	                            "value": function () {return this.transferredInAndOutNum}
	                          }
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
	  ]
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {

	    nextIcon: 'https://oan5zurgx.qnssl.com/pd_port@2x.png',
	    groups: [],
	    products: []
	  }},
	  ready: function ready() {
	    var self = this;
	  },
	  created: function created() {

	    var self = this;

	    var eventModule = __weex_require__('@weex-module/event');
	    eventModule.obtainSelectData(function (e) {

	      var startDate = e.startDate;
	      var endDate = e.endDate;
	      var storeId = e.storeId;
	      self.requestData(storeId, startDate, endDate);
	    });
	  },

	  methods: {
	    requestData: function requestData(storeId, startDate, endDate) {
	      var self = this;
	      var stream = __weex_require__('@weex-module/stream');
	      var modal = __weex_require__('@weex-module/modal');
	      var GET_URL = 'http://test.wgmf.com/mkt-back/productManagement/findTransferredInAndOutDetail?storeNo=' + storeId + '&startDate=' + startDate + '&endDate=' + endDate;
	      var eventModule = __weex_require__('@weex-module/event');
	      eventModule.showHDProgrecessOnWeexPage();

	      stream.fetch({
	        method: 'GET',
	        url: GET_URL,
	        type: 'json'
	      }, function (ret) {
	        var eventModule = __weex_require__('@weex-module/event');
	        eventModule.hiddenHDProgrecessOnWeexPage();
	        if (typeof ret == 'string') {
	          ret = JSON.parse(ret);
	        }
	        if (!ret.ok) {

	          modal.alert({
	            message: '获取数据失败',
	            okTitle: '好'
	          });
	        } else {
	          if (typeof ret.data == 'string') {
	            ret.data = JSON.parse(ret.data);
	          }

	          self.groups = ret.data.resultList;
	        }
	      }, function (response) {});
	    },

	    toast: function toast(msg, duration) {
	      duration = duration || 2;
	      var modal = __weex_require__('@weex-module/modal');
	      modal.toast({
	        'message': msg,
	        'duration': duration
	      });
	    }

	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);