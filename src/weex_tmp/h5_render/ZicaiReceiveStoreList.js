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

	__weex_define__('@weex-component/e488f191ff91b023f3f33a9da867d526', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/e488f191ff91b023f3f33a9da867d526',undefined,undefined)

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
	      "type": "scroller",
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.groups},
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "height": 280,
	                "flexDirection": "row"
	              },
	              "events": {
	                "click": function ($event) {this.cellClick(this.$index,$event)}
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flex": 0.8,
	                    "justifyContent": "center",
	                    "alignContent": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginTop": 20,
	                        "marginLeft": 15
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 35
	                          },
	                          "attr": {
	                            "value": function () {return this.storeNames[this.$index]}
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
	                            "value": function () {return '配送单号:' + (this.dispatchNo)}
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
	                            "value": function () {return '配送数量:' + (this.dispatchNum)}
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
	                            "value": function () {return '配送日期:' + (this.dispatchDate)}
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
	                    "flexDirection": "row"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "flex": 0.5,
	                        "justifyContent": "center",
	                        "alignContent": "center"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 30,
	                            "textAlign": "center",
	                            "color": "#FFA500"
	                          },
	                          "attr": {
	                            "value": "收货"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "flex": 0.5,
	                        "justifyContent": "center",
	                        "alignContent": "center"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 30,
	                            "textAlign": "center"
	                          },
	                          "attr": {
	                            "value": ">"
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

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    storeNames: [],
	    version: '1.3.1',
	    groups: [{}, {}, {}, {}, {}, {}]

	  }},
	  ready: function ready() {
	    var self = this;
	    var eventModule = __weex_require__('@weex-module/event');
	    eventModule.rectiveStaffId(function (ret) {
	      var staffId = ret;
	      self.requestData(staffId);
	    });
	  },

	  methods: {
	    requestData: function requestData(sd) {
	      var self = this;
	      var stream = __weex_require__('@weex-module/stream');
	      var modal = __weex_require__('@weex-module/modal');
	      var GET_URL = 'http://192.168.5.56:8383/mkt-back/productManagement/findCapitalReceipts?staffId=' + sd;
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
	            message: '网络通信失败，请确认网络状况',
	            okTitle: '好'
	          });
	        } else {

	          if (typeof ret.data == 'string') {
	            ret.data = JSON.parse(ret.data);
	          }
	          var dataArr = ret.data.resultList;
	          self.groups = dataArr;
	          var index = 0;
	          for (index = 0; dataArr.length; index++) {
	            var model = dataArr[index];
	            var shopName = model.shop.shopName;
	            self.storeNames.push(shopName);
	          }

	          self.storeName = ret.data.msgContent;
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
	    cellClick: function cellClick(index) {

	      var self = this;
	      var model = self.groups[index];
	      var capitalReceiptsId = model.capitalReceiptsId;
	      var eventModule = __weex_require__('@weex-module/event');
	      eventModule.zicaiReceiveCall(capitalReceiptsId, function (e) {
	        self.$openURL('ZicaiReceiveDetail.js?title=资材收货');
	      });
	    }

	  },
	  created: function created() {}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);