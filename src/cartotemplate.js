export default class CartoTemplate {
  constructor(mapsAPIresponse, user) {
    this._cdnURL = 'http://ashbu.cartocdn.com/';
    this._user = user;
    this._templateURL = '';
    this._layergroupid = mapsAPIresponse.layergroupid;
  }

  getTemplateURL() {
    this._templateURL = `${this._cdnURL}${this._user}/api/v1/map/${this._layergroupid}/0/{z}/{x}/{y}.png`;
    return this._templateURL;
  }

}
