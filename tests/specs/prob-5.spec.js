/*eslint-env node, mocha */

describe.only('Euler005', function() {
  describe('Internal Methods', function() {
    it('should be defined', function() {
      expect(typeof euler005).to.be.equal("object")
    });
  });

  describe('smallestPositiveNumber function', function() {

    describe('isPrime Number or Not', function(){
      it('should return false for 4, as 4 is not a prime', function(){
        expect(euler005.isPrime(4)).to.be.false;
      });

      it('should return true for 5, as 5 is a prime', function(){
        expect(euler005.isPrime(5)).to.be.true;
      });

    });

    it('should accept two params', function() {
      expect(euler005.getSmallestMultiple).to.have.length(2);
    });
    
  });
});
