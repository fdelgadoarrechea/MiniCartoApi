/* global describe, it, before */

var chai = require('chai')
var L = require('leaflet-headless')
var CartoTest = require('../lib/CartoTest.js')

chai.expect();

const expect = chai.expect;

let map;

describe('Given an instance of my ConfigReader library', () => {
  before(() => {
    map = new CartoTest()
    config = map.config
  });

  it('should return the zoom', () => {
    expect(config.getZoom()).to.be.equal(4)
  })
})
