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

	__weex_define__('@weex-component/dcead4d116f00c9dcd74db5170b71e43', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/dcead4d116f00c9dcd74db5170b71e43',undefined,undefined)

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
	      "style": {
	        "flexDirection": "row",
	        "justifyContent": "center",
	        "alignItems": "center",
	        "height": 100
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flex": 0.8,
	            "marginLeft": 15
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 30,
	                "color": "#808080"
	              },
	              "attr": {
	                "value": "资材名称"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flex": 0.2,
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 30,
	                "color": "#808080"
	              },
	              "attr": {
	                "value": "数量"
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
	                "flexDirection": "row",
	                "justifyContent": "center",
	                "alignItems": "center",
	                "height": 150
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flex": 0.8,
	                    "height": 150,
	                    "justifyContent": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginLeft": 15
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 35
	                          },
	                          "attr": {
	                            "value": function () {return this.fixedProduct.productName}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginTop": 15,
	                        "marginLeft": 15
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 30,
	                            "color": "#808080"
	                          },
	                          "attr": {
	                            "value": function () {return this.fixedProduct.productCode}
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
	                    "height": 150,
	                    "justifyContent": "center",
	                    "alignItems": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 35
	                          },
	                          "attr": {
	                            "value": function () {return this.productNum}
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
	    },
	    {
	      "type": "div",
	      "style": {
	        "height": 200
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "backgroundColor": "#FFA500",
	            "height": 100,
	            "borderRadius": 7,
	            "marginLeft": 15,
	            "marginRight": 15,
	            "justifyContent": "center",
	            "alignItems": "center",
	            "marginTop": 15
	          },
	          "events": {
	            "click": "confirmClicked"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#FFFFFF",
	                "fontSize": 35
	              },
	              "attr": {
	                "value": "确认收货"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginTop": 15,
	            "marginLeft": 15,
	            "marginRight": 15
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#808080",
	                "fontSize": 28
	              },
	              "attr": {
	                "value": "到货后请先确认收货，如数量不符，通过业务-反馈直通车中到货误差反馈处理"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "shown": function () {return this.show},
	      "style": {
	        "position": "fixed",
	        "backgroundColor": "rgb(126,127,126)",
	        "opacity": 0.5,
	        "filter": "alpha(opacity=40)",
	        "zIndex": 99,
	        "left": 0,
	        "top": 0,
	        "bottom": 0,
	        "right": 0,
	        "justifyContent": "center"
	      }
	    },
	    {
	      "type": "div",
	      "shown": function () {return this.show},
	      "style": {
	        "position": "fixed",
	        "backgroundColor": "#FFFFFF",
	        "zIndex": 190,
	        "left": 30,
	        "top": 200,
	        "bottom": 200,
	        "right": 30,
	        "justifyContent": "center",
	        "borderRadius": 10
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.successicon}
	              },
	              "style": {
	                "height": 148,
	                "width": 146
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginTop": 15,
	            "marginRight": 15,
	            "marginLeft": 15
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 35,
	                "textAlign": "center"
	              },
	              "attr": {
	                "value": "收货成功"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginTop": 20,
	            "marginLeft": 15,
	            "marginRight": 15
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 30,
	                "textAlign": "left"
	              },
	              "attr": {
	                "value": "如果数量不符,点击反馈直通车中到货误差反馈处理"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginTop": 25,
	            "height": 120,
	            "borderRadius": 7,
	            "borderColor": "#808080",
	            "borderWidth": 1,
	            "justifyContent": "center",
	            "marginLeft": 15,
	            "marginRight": 15
	          },
	          "events": {
	            "click": "questionReportClick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#FFA500",
	                "fontSize": 35,
	                "textAlign": "center"
	              },
	              "attr": {
	                "value": "反馈直通车"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginTop": 25,
	            "height": 120,
	            "borderRadius": 7,
	            "borderColor": "#808080",
	            "borderWidth": 1,
	            "justifyContent": "center",
	            "marginLeft": 15,
	            "marginRight": 15
	          },
	          "events": {
	            "click": "zicaiQueryClick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#FFA500",
	                "fontSize": 35,
	                "textAlign": "center"
	              },
	              "attr": {
	                "value": "资材库查询"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginTop": 25,
	            "height": 120,
	            "borderRadius": 7,
	            "borderColor": "#808080",
	            "borderWidth": 1,
	            "justifyContent": "center",
	            "marginLeft": 15,
	            "marginRight": 15
	          },
	          "events": {
	            "click": "gobackPageClick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#FFA500",
	                "fontSize": 35,
	                "textAlign": "center"
	              },
	              "attr": {
	                "value": "返回首页"
	              }
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
	    show: false,
	    successicon: 'https://oan5zurgx.qnssl.com/success_icon@2x.png',
	    groups: [],
	    proNums: [],

	    submitFlag: 1

	  }},
	  ready: function ready() {},

	  methods: {
	    requestData: function requestData(capitalReceiptsId) {
	      var self = this;
	      var stream = __weex_require__('@weex-module/stream');
	      var modal = __weex_require__('@weex-module/modal');

	      var GET_URL = 'http://test.wgmf.com/mkt-back/productManagement/findCapitalReceiptsDetail?capitalReceiptsId=' + capitalReceiptsId;
	      self.toast('数据加载中...');
	      stream.fetch({
	        method: 'GET',
	        url: GET_URL,
	        type: 'json'
	      }, function (ret) {

	        if (typeof ret == 'string') {
	          ret = JSON.parse(ret);
	        }
	        if (!ret.ok) {
	          modal.alert({
	            message: '连接不到服务器',
	            okTitle: '好'
	          });
	        } else {
	          if (typeof ret.data == 'string') {
	            ret.data = JSON.parse(ret.data);
	          }

	          var dataArr = ret.data.resultList;

	          self.groups = dataArr;
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
	    },

	    confirmClicked: function confirmClicked() {
	      var self = this;

	      if (self.groups.length == 0) {
	        self.toast("没有数据");
	        return;
	      }
	      if (self.submitFlag == 2) {
	        self.toast("不能重复提交");
	        return;
	      }

	      self.show = true;
	      self.submitFlag = 2;
	    },

	    questionReportClick: function questionReportClick() {
	      var self = this;
	      var eventModule = __weex_require__('@weex-module/event');
	      eventModule.toQuestionReportPage();
	      self.show = false;
	    },

	    zicaiQueryClick: function zicaiQueryClick() {
	      var self = this;

	      var eventModule = __weex_require__('@weex-module/event');
	      eventModule.pushToZicaikuStoreList();
	      self.show = false;
	    },

	    gobackPageClick: function gobackPageClick() {
	      var self = this;
	      var eventModule = __weex_require__('@weex-module/event');
	      eventModule.popViewControllerToBack();
	      self.show = false;
	    }

	  },
	  created: function created() {
	    var self = this;


	    self.requestData('1582850');
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);