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

class CartoTest {
  constructor() {
    this.config = new _configreader2.default(_mapconfig2.default);

    this.renderer = new _maprenderer2.default(this.config.getCenter(), this.config.getZoom());
    this.renderer.renderMap('mapid');

    this.cartoLayer = '';

    this.initAll();
  }

  async initAll() {
    if (!this.cartoLayer) {
      this.cartoLayer = new _cartotemplate2.default(this.config.getUser());
      this.cartoLayer.setMapConfig(this.config.getMapConfig());
    }

    await this.cartoLayer.generateTemplateURL(this.config.getURL());

    this.showLayers();
  }

  showCartoLayer() {
    this.renderer.renderLayer(this.cartoLayer.getTemplateURL());
  }

  showLayers() {
    this.renderer.renderLayers(this.config.getLayers());
    this.showCartoLayer();
  }

  setSQL(sql) {
    this.cartoLayer.setSQL(sql);
    this.initAll();
    // this.renderer.destroyLayer();
  }

  hideLayer(pos) {
    this.renderer.hideLayer(pos);
  }

  showLayer(pos) {
    this.renderer.showLayer(pos);
  }
}

module.exports = CartoTest;

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
class ConfigReader {
  constructor(config) {
    this._config = config;
    this._url = '';
    this._mapconfig = '';
    this._user = '';
    this._layers = [];
    this._center = config.center;
    this._zoom = config.zoom;
  }

  getCenter() {
    let center = this._center;

    this._center = center.slice(1, -1).split(',');
    return this._center;
  }

  getZoom() {
    return this._zoom;
  }

  getUser() {
    this._user = this._config.maps_api_config.user_name;
    return this._user;
  }

  getURL() {
    this._url = `https://${this.getUser()}.carto.com/api/v1/map`;
    return this._url;
  }

  getMapConfig() {
    let layers = this._config.layers;
    let finalLayers = [];
    let cartodblayer = '';

    layers.forEach(function (element) {
      if (element.type === 'CartoDB') {
        cartodblayer = {
          'version': '1.3.1',
          'layers': [{
            'type': 'cartodb',
            'options': element.options
          }]
        };
      } else {
        finalLayers.push(element.options.urlTemplate);
      }
    });
    this._mapconfig = cartodblayer;
    this._layers = finalLayers;
    return this._mapconfig;
  }

  getLayers() {
    return this._layers;
  }

}
exports.default = ConfigReader;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class CartoTemplate {
  constructor(user) {
    this._cdnURL = 'http://ashbu.cartocdn.com/';
    this._user = user;
    this._templateURL = '';
    this._layergroupid = '';
    this._mapconfig = '';
  }

  setLayerGroupID(response) {
    this._layergroupid = response.layergroupid;
    return this.getTemplateURL();
  }

  getTemplateURL() {
    this._templateURL = `${this._cdnURL}${this._user}/api/v1/map/${this._layergroupid}/0/{z}/{x}/{y}.png`;
    return this._templateURL;
  }

  validateResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  getMapConfig() {
    return this._mapconfig;
  }

  setMapConfig(mapconfig) {
    this._mapconfig = mapconfig;
  }

  setSQL(sql) {
    this._mapconfig.layers[0].options.sql = sql;
  }

  async generateTemplateURL(url) {
    let finalURL = await fetch(url, {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(this._mapconfig),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(this.validateResponse).then(response => response.json()).then(response => this.setLayerGroupID(response)).catch(this.logError);

    return finalURL;
  }

  logError(error) {
    throw Error('Looks like there was a problem: \n', error);
  }

}
exports.default = CartoTemplate;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
let L = __webpack_require__(5);

class MapRenderer {
  constructor(center, zoom) {
    this._center = center;
    this._zoom = zoom;
    this._templateURL = '';
    this._currentMap = '';
    this._layers = [];
    this._layer = '';
  }

  renderMap(divid) {
    this._currentMap = L.map(divid).setView(this._center, this._zoom);
  }

  hideLayer(pos) {
    let temp = this._layers[pos];

    temp._container.style.opacity = 0;
  }

  showLayer(pos) {
    let temp = this._layers[pos];

    temp._container.style.opacity = 1;
  }

  renderLayer(layer) {
    let map = this._currentMap;

    this._layer = L.tileLayer(layer, {
      maxZoom: 18
    }).addTo(map);
    this._layers.push(this._layer);
  }

  renderLayers(layers) {
    let map = this._currentMap;
    let storedLayers = [];

    layers.forEach(function (element) {
      let currentLayer = L.tileLayer(element, {
        maxZoom: 18
      }).addTo(map);

      storedLayers.push(currentLayer);
    });
    this._layers = storedLayers;
  }

  destroyLayer() {
    let map = this._currentMap;

    map.removeLayer(this._layer);
  }
}
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