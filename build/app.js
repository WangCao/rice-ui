(function(){
  
  var manifestJson = {"package":"com.application.demo","name":"rice-ui","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1020","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Demos","pages":{"Demos":{"component":"index"},"Demos/switch":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f9f9f9","backgroundColor":"#f9f9f9","titleBarTextColor":"#000","titleBar":false}}
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=D:\\work\\github\\rice-ui\\src!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=D:\\work\\github\\rice-ui&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=D:/work/github/rice-ui/src!./node_modules/_babel-loader@8.0.6@babel-loader/lib?cwd=D:/work/github/rice-ui&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function __scriptModule__ (module, exports, $app_require$){\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _util = _interopRequireDefault(__webpack_require__(/*! ./util */ \"./src/util.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = {\n  showMenu: _util[\"default\"].showMenu,\n  createShortcut: _util[\"default\"].createShortcut\n};\nexports[\"default\"] = _default;}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNi42QEBoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvc2NyaXB0LWxvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9fQGhhcC10b29sa2l0X2RzbC14dm1AMC42LjZAQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlci9tb2R1bGUtbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL19AaGFwLXRvb2xraXRfZHNsLXh2bUAwLjYuNkBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPUQ6XFx3b3JrXFxnaXRodWJcXHJpY2UtdWlcXHNyYyEuL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDguMC42QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y3dkPUQ6XFx3b3JrXFxnaXRodWJcXHJpY2UtdWkmY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UhLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNi42QEBoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9zcmMvYXBwLnV4P3V4VHlwZT1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC51eD8wZjE5Il0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4vKipcbiog5bqU55So57qn5Yir55qE6YWN572u77yM5L6b5omA5pyJ6aG16Z2i5YWs55SoXG4qL1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNob3dNZW51OiB1dGlsLnNob3dNZW51LFxuICBjcmVhdGVTaG9ydGN1dDogdXRpbC5jcmVhdGVTaG9ydGN1dFxufVxuPC9zY3JpcHQ+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=D:\\work\\github\\rice-ui\\src!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=D:\\work\\github\\rice-ui&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $app_style$ = {};var $app_script$ = __webpack_require__(/*! ../node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=D:/work/github/rice-ui/src!../node_modules/babel-loader?cwd=D:/work/github/rice-ui&cacheDirectory&comments=false!../node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ \"./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=D:\\\\work\\\\github\\\\rice-ui\\\\src!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=D:\\\\work\\\\github\\\\rice-ui&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.6.6@@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\")\n\n$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){\n     $app_script$($app_module$, $app_exports$, $app_require$)\n     if ($app_exports$.__esModule && $app_exports$.default) {\n            $app_module$.exports = $app_exports$.default;\n        }\n     $app_module$.exports['manifest'] = manifestJson;\n     $app_module$.exports.style = { list: [ $app_style$ ] };\n})\n\n$app_bootstrap$('@app-application/app',{ packagerVersion: '0.6.6'})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnV4P3V4VHlwZT1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnV4P2I5NmYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICRhcHBfc3R5bGUkID0ge307dmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL19AaGFwLXRvb2xraXRfZHNsLXh2bUAwLjYuNkBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL3NjcmlwdC1sb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL19AaGFwLXRvb2xraXRfZHNsLXh2bUAwLjYuNkBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21vZHVsZS1sb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL19AaGFwLXRvb2xraXRfZHNsLXh2bUAwLjYuNkBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPUQ6XFxcXHdvcmtcXFxcZ2l0aHViXFxcXHJpY2UtdWlcXFxcc3JjIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/Y3dkPUQ6XFxcXHdvcmtcXFxcZ2l0aHViXFxcXHJpY2UtdWkmY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UhLi4vbm9kZV9tb2R1bGVzL19AaGFwLXRvb2xraXRfZHNsLXh2bUAwLjYuNkBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vYXBwLnV4P3V4VHlwZT1hcHBcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWFwcGxpY2F0aW9uL2FwcCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHNbJ21hbmlmZXN0J10gPSBtYW5pZmVzdEpzb247XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0geyBsaXN0OiBbICRhcHBfc3R5bGUkIF0gfTtcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1hcHBsaWNhdGlvbi9hcHAnLHsgcGFja2FnZXJWZXJzaW9uOiAnMC42LjYnfSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n/**\n * 显示菜单\n */\nfunction showMenu() {\n  var prompt = $app_require$('@app-module/system.prompt');\n\n  var router = $app_require$('@app-module/system.router');\n\n  var appInfo = $app_require$('@app-module/system.app').getInfo();\n\n  prompt.showContextMenu({\n    itemList: ['保存桌面', '关于', '取消'],\n    success: function success(ret) {\n      switch (ret.index) {\n        case 0:\n          // 保存桌面\n          createShortcut();\n          break;\n\n        case 1:\n          // 关于\n          router.push({\n            uri: '/About',\n            params: {\n              name: appInfo.name,\n              icon: appInfo.icon\n            }\n          });\n          break;\n\n        case 2:\n          // 取消\n          break;\n\n        default:\n          prompt.showToast({\n            message: 'error'\n          });\n      }\n    }\n  });\n}\n/**\n * 创建桌面图标\n * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限\n */\n\n\nfunction createShortcut() {\n  var prompt = $app_require$('@app-module/system.prompt');\n\n  var shortcut = $app_require$('@app-module/system.shortcut');\n\n  shortcut.hasInstalled({\n    success: function success(ret) {\n      if (ret) {\n        prompt.showToast({\n          message: '已创建桌面图标'\n        });\n      } else {\n        shortcut.install({\n          success: function success() {\n            prompt.showToast({\n              message: '成功创建桌面图标'\n            });\n          },\n          fail: function fail(errmsg, errcode) {\n            prompt.showToast({\n              message: \"\".concat(errcode, \": \").concat(errmsg)\n            });\n          }\n        });\n      }\n    }\n  });\n}\n\nvar _default = {\n  showMenu: showMenu,\n  createShortcut: createShortcut\n};\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsLmpzP2UwZWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmmL7npLroj5zljZVcbiAqL1xuZnVuY3Rpb24gc2hvd01lbnUgKCkge1xuICBjb25zdCBwcm9tcHQgPSByZXF1aXJlKCdAc3lzdGVtLnByb21wdCcpXG4gIGNvbnN0IHJvdXRlciA9IHJlcXVpcmUoJ0BzeXN0ZW0ucm91dGVyJylcbiAgY29uc3QgYXBwSW5mbyA9IHJlcXVpcmUoJ0BzeXN0ZW0uYXBwJykuZ2V0SW5mbygpXG4gIHByb21wdC5zaG93Q29udGV4dE1lbnUoe1xuICAgIGl0ZW1MaXN0OiBbJ+S/neWtmOahjOmdoicsICflhbPkuo4nLCAn5Y+W5raIJ10sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJldCkge1xuICAgICAgc3dpdGNoIChyZXQuaW5kZXgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgLy8g5L+d5a2Y5qGM6Z2iXG4gICAgICAgIGNyZWF0ZVNob3J0Y3V0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgLy8g5YWz5LqOXG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICB1cmk6ICcvQWJvdXQnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbmFtZTogYXBwSW5mby5uYW1lLFxuICAgICAgICAgICAgaWNvbjogYXBwSW5mby5pY29uXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAyOlxuICAgICAgICAvLyDlj5bmtohcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvcidcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICog5Yib5bu65qGM6Z2i5Zu+5qCHXG4gKiDms6jmhI/vvJrkvb/nlKjliqDovb3lmajmtYvor5Vg5Yib5bu65qGM6Z2i5b+r5o235pa55byPYOWKn+iDveaXtu+8jOivt+WFiOWcqGDns7vnu5/orr7nva5g5Lit5omT5byAYOW6lOeUqOWKoOi9veWZqGDnmoRg5qGM6Z2i5b+r5o235pa55byPYOadg+mZkFxuICovXG5mdW5jdGlvbiBjcmVhdGVTaG9ydGN1dCAoKSB7XG4gIGNvbnN0IHByb21wdCA9IHJlcXVpcmUoJ0BzeXN0ZW0ucHJvbXB0JylcbiAgY29uc3Qgc2hvcnRjdXQgPSByZXF1aXJlKCdAc3lzdGVtLnNob3J0Y3V0JylcbiAgc2hvcnRjdXQuaGFzSW5zdGFsbGVkKHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmV0KSB7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICflt7LliJvlu7rmoYzpnaLlm77moIcnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG9ydGN1dC5pbnN0YWxsKHtcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+aIkOWKn+WIm+W7uuahjOmdouWbvuaghydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJybXNnLCBlcnJjb2RlKSB7XG4gICAgICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogYCR7ZXJyY29kZX06ICR7ZXJybXNnfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93TWVudSxcbiAgY3JlYXRlU2hvcnRjdXRcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBbkJBO0FBdUJBO0FBMUJBO0FBNEJBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFWQTtBQVlBO0FBQ0E7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util.js\n");

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = manifestJson;
  }
})();