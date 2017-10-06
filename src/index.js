import mapconfig from './mapconfig.json';
import ConfigReader from './configreader.js';
import CartoTemplate from './cartotemplate.js';
import MapRenderer from './maprenderer.js';

class CartoTest {
  constructor() {
    this.config = new ConfigReader(mapconfig);
    this.cartoLayer = '';
    this._layers = [];
  }

  async initAll() {
    if (!this.cartoLayer) {
      this.renderer = new MapRenderer(this.config.getCenter(), this.config.getZoom());
      this.renderer.renderMap('mapid');
      this.cartoLayer = new CartoTemplate(this.config.getUser());
      this.cartoLayer.setMapConfig(this.config.getCartoLayer());
    }

    let cartoTemplateURL = await this.cartoLayer.generateTemplateURL(this.config.getURL());

    this.setURLLayers(this.config.getLayers(), cartoTemplateURL);
    this.showLayers();
  }

  showLayers() {
    this.renderer.renderLayers(this._layers);
  }

  setSQL(sql) {
    this.cartoLayer.setSQL(sql);
    this.initAll();
  }

  hideLayer(pos) {
    this.renderer.hideLayer(pos);
  }

  showLayer(pos) {
    this.renderer.showLayer(pos);
  }

  setURLLayers(configLayers, cartoTemplateURL) {
    let layer;
    let finalLayers = [];

    configLayers.forEach(function (element) {
      if (element.type === 'CartoDB') {
        layer = cartoTemplateURL;
      } else {
        layer = element.options.urlTemplate;
      }
      finalLayers.push(layer);
    });
    this._layers = finalLayers;
  }
}

module.exports = CartoTest;
