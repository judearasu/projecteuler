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
        expect(euler005._isPrime(4)).to.be.false;
      });

      it('should return true for 5, as 5 is a prime', function(){
        expect(euler005._isPrime(5)).to.be.true;
      });
    });

    it('should accept two params', function() {
      expect(euler005.getSmallestMultiple).to.have.length(2);
    });

    it('should return a value', function(){
      expect(euler005.getSmallestMultiple(1,20)).to.equal(232792560);
    });

    // it('should return the highest value 7 from 1 to 10', function(){
    //   expect(euler005.getSmallestMultiple(1,10)).to.equal(7);
    // });
    //
    // it('should return the highest value 19 from 1 to 20', function(){
    //   expect(euler005.getSmallestMultiple(1,20)).to.equal(19);
    // });

  });
});
