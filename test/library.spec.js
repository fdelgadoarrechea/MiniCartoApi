/* global describe, it, before */
import chai from 'chai';
import {CartoTest} from '../lib/CartoTest.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my ConfigReader library', () => {
  before(() => {
    lib = new CartoTest();
  });
  describe('when I need the zoom', () => {
    it('should return the zoom', () => {
      expect(lib.zoom).to.be.equal(4);
    });
  });
});
