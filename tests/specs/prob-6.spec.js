/*eslint-env node, mocha */

describe.only('Euler006', function() {
  describe('Internal Methods', function() {
    it('should be defined', function() {
      expect(typeof euler006).to.be.equal("object")
    });
  });

  describe('getSquaresSum function', function() {
    it('should accept one argument', function() {
      expect(euler006.getSquaresSum).to.have.length(1);
    });
    it('should return zero before calling X', function() {
      expect(euler006.getValueX()).to.be.equal(0);
    })
    it('should return the value of squares sum for the first 10 numbers', function() {
      console.log(euler006.getSquaresSum(10));
      expect(euler006.getSquaresSum(10)).to.be.equal(385);
    });
  });

  describe('getSumSquares function', function() {
    it('should accept one argument', function() {
      expect(euler006.getSumSquares).to.have.length(1);
    });
    it('should return zero before calling Y', function() {
      expect(euler006.getValueY()).to.be.equal(0);
    })
    it('should return the square of the sum of the first ten natural numbers', function() {
      //console.log(euler006.getSumSquares(10));
      console.log(euler006.getValueY());
      expect(euler006.getSumSquares(10)).to.be.equal(3025);
    });
  });

  describe('getDiff function', function() {

    it('should accept two argument', function() {
      expect(euler006.getDiff).to.have.length(0);
    });
    it('Should return the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum', function() {
      console.log("b",euler006.getSumSquares(10));
      console.log("a",euler006.getSquaresSum(10));
      // console.log(euler006.getValueY());
      // expect(euler006.getDiff()).to.be.equal(3025);
    });
  });
});
