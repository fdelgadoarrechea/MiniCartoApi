export default class ConfigReader {
  constructor(config) {
    this._config = config;
    this._url = '';
    this._user = '';
    this._lat = 0;
    this._lng = 0;
    this._center = config.center;
    this._zoom = config.zoom;
    this.setCenter();
  }

  setCenter() {
    let center = this._center;
    let latlng = center.slice(1, -1).split(',');

    this._lat = parseFloat(latlng[0]);
    this._lng = parseFloat(latlng[1]);
    this._center = latlng;
  }

  getLat() {
    return this._lat;
  }

  getLng() {
    return this._lng;
  }

  getCenter() {
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

  getCartoLayer() {
    let layers = this._config.layers;
    let cartoLayer;

    layers.forEach(function (element) {
      if (element.type === 'CartoDB') {
        cartoLayer = element;
      }
    });
    return cartoLayer;
  }

  getLayers() {
    return this._config.layers;
  }

}
