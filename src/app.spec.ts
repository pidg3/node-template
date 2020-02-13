const giveMeFood = require('./app').giveMeFood;
const expect = require('chai').expect;

describe('Stub function', () => {

  it('should return Gravy Peas', () => {
    const result = giveMeFood();
    expect(result).to.equal('Gravy Peas');
  });

});