import L from 'leaflet';

export default class MapRenderer {
  constructor(center, zoom) {
    this._center = center;
    this._zoom = zoom;
    this._templateURL = '';
    this._currentMap = '';
  }

  renderMap(divid) {
    this._currentMap = L.map(divid).setView(this._center, this._zoom);
  }

  renderLayers(layers) {
    let map = this._currentMap;

    layers.forEach(function (element) {
      L.tileLayer(element, {
        maxZoom: 18
      }).addTo(map);
    });
  }
}
