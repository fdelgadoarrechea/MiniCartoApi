import mapconfig from './mapconfig.json';
import ConfigReader from './configreader.js';
import CartoTemplate from './cartotemplate.js';
import MapRenderer from './maprenderer.js';

class CartoTest {
  constructor() {
    this.config = new ConfigReader(mapconfig);
    this.cartoLayer = '';

    // this.renderer = new MapRenderer(this.config.getCenter(), this.config.getZoom());
    // this.renderer.renderMap('mapid');

    this.initAll();
  }

  async initAll() {
    if (!this.cartoLayer) {
      this.cartoLayer = new CartoTemplate(this.config.getUser());
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
