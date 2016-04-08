/*eslint-env node, mocha */

describe('Euler006', function() {
  describe('Internal Methods', function() {
    it('should be defined', function() {
      expect(typeof euler006).to.be.equal("object")
    });
  });

  describe('getSumOfSquares function', function() {
    it('should accept one argument', function() {
      expect(euler006.getSumOfSquares).to.have.length(1);
    });
    it('should return the value of squares sum for the first 10 numbers', function() {
      //console.log(euler006.getSumOfSquares(10));
      expect(euler006.getSumOfSquares(10)).to.be.equal(385);
    });
  });

  describe('getSquaresOfSum function', function() {
    it('should accept one argument', function() {
      expect(euler006.getSquaresOfSum).to.have.length(1);
    });

    it('should return the square of the sum of the first ten natural numbers', function() {
      expect(euler006.getSquaresOfSum(10)).to.be.equal(3025);
    });
  });

  describe('getDiff function', function() {
    it('should return the value Y', function() {
      euler006.getSumOfSquares(100);
      euler006.getSquaresOfSum(100);
      expect(euler006.getDiff()).to.be.equal(25164150);
    });
  });
});
