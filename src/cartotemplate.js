export default class CartoTemplate {
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
    this._mapconfig = {
      'version': '1.3.1',
      'layers': [{
        'type': 'cartodb',
        'options': mapconfig.options
      }]
    };
  }

  setSQL(sql) {
    this._mapconfig.layers.forEach(function (element) {
      element.options.sql = sql;
    });
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
    })
    .then(this.validateResponse)
    .then((response) => response.json())
    .then((response) => this.setLayerGroupID(response))
    .catch(this.logError);

    return finalURL;
  }

  logError(error) {
    throw Error('Looks like there was a problem: \n', error);
  }

}
