export default class ConfigReader {
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
                finalLayers.push('CartoDB');
            } else {
                finalLayers.push(element.options.urlTemplate);
            }
        });
        this._mapconfig = cartodblayer;
        this._layers = finalLayers;
        return this._mapconfig;
    }

    pushCartoLayer(layer) {
        let finalLayers = [];

        this._layers.forEach(function (element) {
            if (element === 'CartoDB') {
                finalLayers.push(layer);
            } else {
                finalLayers.push(element);
            }
        });
        this._layers = finalLayers;
    }

    getLayers() {
        return this._layers;
    }

}
