var L = require('leaflet-headless');

var chai = require('chai');

var CartoTest = require('../lib/CartoTest.js');

chai.should();

describe('Config Reader', function () {
  var carto, config;

  beforeEach(function () {

    carto = new CartoTest();
    config = carto.config;
  });

  describe('Basic Config functions', function () {
    it('has a default latitude of 52.5897007687178', function () {
      config.getLat().should.equal(52.5897007687178);
    });

    it('has a default longitude of 52.734375', function () {
      config.getLng().should.equal(52.734375);
    });

    it('has a default zoom of 4', function () {
      config.getZoom().should.equal(4);
    });

    it('has a default user "documentation"', function () {
      config.getUser().should.equal('documentation');
    });

    it('has a valid api URL like https://documentation.carto.com/api/v1/map', function () {
      config.getURL().should.equal('https://documentation.carto.com/api/v1/map');
    });

    it('has a Carto layer with default SQL of "select * from european_countries_e"', function () {
      config.getCartoLayer().options.sql.should.equal('select * from european_countries_e');
    });

  });

});
