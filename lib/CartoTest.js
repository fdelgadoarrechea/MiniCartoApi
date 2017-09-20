(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("L"));
	else if(typeof define === 'function' && define.amd)
		define("CartoTest", ["L"], factory);
	else if(typeof exports === 'object')
		exports["CartoTest"] = factory(require("L"));
	else
		root["CartoTest"] = factory(root["L"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mapconfig = __webpack_require__(1);

var _mapconfig2 = _interopRequireDefault(_mapconfig);

var _configreader = __webpack_require__(2);

var _configreader2 = _interopRequireDefault(_configreader);

var _cartotemplate = __webpack_require__(3);

var _cartotemplate2 = _interopRequireDefault(_cartotemplate);

var _maprenderer = __webpack_require__(4);

var _maprenderer2 = _interopRequireDefault(_maprenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new _configreader2.default(_mapconfig2.default);

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function renderResult(mapsAPIresponse) {
  var cartoLayer = new _cartotemplate2.default(mapsAPIresponse, config.getUser());

  config.pushCartoLayer(cartoLayer.getTemplateURL());
  var renderer = new _maprenderer2.default(config.getCenter(), config.getZoom());

  renderer.renderMap('mapid');
  renderer.renderLayers(config.getLayers());
}

function logError(error) {
  console.log('Looks like there was a problem: \n', error);
}

fetch(config.getURL(), {
  mode: 'cors',
  method: 'POST',
  body: JSON.stringify(config.getMapConfig()),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}).then(validateResponse).then(function (response) {
  return response.json();
}).then(renderResult).catch(logError);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"center":"[52.5897007687178, 52.734375]","zoom":4,"maps_api_config":{"user_name":"documentation","maps_api_template":"http://{user}.cartodb.com:80"},"layers":[{"type":"tiled","options":{"urlTemplate":"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png","minZoom":"0","maxZoom":"18","attribution":"&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"}},{"type":"CartoDB","options":{"sql":"select * from european_countries_e","cartocss":"/** choropleth visualization */\n\n#european_countries_e{\n  polygon-fill: #FFFFB2;\n  polygon-opacity: 0.8;\n  line-color: #FFF;\n  line-width: 1;\n  line-opacity: 0.5;\n}\n#european_countries_e [ area <= 1638094] {\n   polygon-fill: #B10026;\n}\n#european_countries_e [ area <= 55010] {\n   polygon-fill: #E31A1C;\n}\n#european_countries_e [ area <= 34895] {\n   polygon-fill: #FC4E2A;\n}\n#european_countries_e [ area <= 12890] {\n   polygon-fill: #FD8D3C;\n}\n#european_countries_e [ area <= 10025] {\n   polygon-fill: #FEB24C;\n}\n#european_countries_e [ area <= 9150] {\n   polygon-fill: #FED976;\n}\n#european_countries_e [ area <= 5592] {\n   polygon-fill: #FFFFB2;\n}","cartocss_version":"2.1.1"}},{"options":{"urlTemplate":"http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png","minZoom":"0","maxZoom":"18","attribution":"&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"},"type":"tiled"}]}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfigReader = function () {
  function ConfigReader(config) {
    _classCallCheck(this, ConfigReader);

    this._config = config;
    this._url = '';
    this._mapconfig = '';
    this._user = '';
    this._layers = [];
    this._center = config.center;
    this._zoom = config.zoom;
  }

  _createClass(ConfigReader, [{
    key: 'getCenter',
    value: function getCenter() {
      var center = this._center;

      this._center = center.slice(1, -1).split(',');
      return this._center;
    }
  }, {
    key: 'getZoom',
    value: function getZoom() {
      return this._zoom;
    }
  }, {
    key: 'getUser',
    value: function getUser() {
      this._user = this._config.maps_api_config.user_name;
      return this._user;
    }
  }, {
    key: 'getURL',
    value: function getURL() {
      this._url = 'https://' + this.getUser() + '.carto.com/api/v1/map';
      return this._url;
    }
  }, {
    key: 'getMapConfig',
    value: function getMapConfig() {
      var layers = this._config.layers;
      var finalLayers = [];
      var cartodblayer = '';

      layers.forEach(function (element) {
        if (element.type === 'CartoDB') {
          cartodblayer = {
            'version': '1.3.1',
            'layers': [{
              'type': 'cartodb',
              'options': element.options
            }]
          };
          finalLayers.push('CartoDB');
        } else {
          finalLayers.push(element.options.urlTemplate);
        }
      });
      this._mapconfig = cartodblayer;
      this._layers = finalLayers;
      return this._mapconfig;
    }
  }, {
    key: 'pushCartoLayer',
    value: function pushCartoLayer(layer) {
      var finalLayers = [];

      this._layers.forEach(function (element) {
        if (element === 'CartoDB') {
          finalLayers.push(layer);
        } else {
          finalLayers.push(element);
        }
      });
      this._layers = finalLayers;
    }
  }, {
    key: 'getLayers',
    value: function getLayers() {
      return this._layers;
    }
  }]);

  return ConfigReader;
}();

exports.default = ConfigReader;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartoTemplate = function () {
  function CartoTemplate(mapsAPIresponse, user) {
    _classCallCheck(this, CartoTemplate);

    this._cdnURL = 'http://ashbu.cartocdn.com/';
    this._user = user;
    this._templateURL = '';
    this._layergroupid = mapsAPIresponse.layergroupid;
  }

  _createClass(CartoTemplate, [{
    key: 'getTemplateURL',
    value: function getTemplateURL() {
      this._templateURL = '' + this._cdnURL + this._user + '/api/v1/map/' + this._layergroupid + '/0/{z}/{x}/{y}.png';
      return this._templateURL;
    }
  }]);

  return CartoTemplate;
}();

exports.default = CartoTemplate;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var L = __webpack_require__(5);

var MapRenderer = function () {
  function MapRenderer(center, zoom) {
    _classCallCheck(this, MapRenderer);

    this._center = center;
    this._zoom = zoom;
    this._templateURL = '';
    this._currentMap = '';
  }

  _createClass(MapRenderer, [{
    key: 'renderMap',
    value: function renderMap(divid) {
      this._currentMap = L.map(divid).setView(this._center, this._zoom);
    }
  }, {
    key: 'renderLayers',
    value: function renderLayers(layers) {
      var map = this._currentMap;

      layers.forEach(function (element) {
        L.tileLayer(element, {
          maxZoom: 18
        }).addTo(map);
      });
    }
  }]);

  return MapRenderer;
}();

exports.default = MapRenderer;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=CartoTest.js.map