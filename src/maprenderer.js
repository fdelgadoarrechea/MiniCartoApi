let L = require('leaflet-headless');

export default class MapRenderer {
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
