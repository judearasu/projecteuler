/*eslint-env node, mocha */

describe('Euler003', function() {
  describe('Internal Methods', function() {
    it('should be defined', function() {
      expect(typeof euler003).to.be.equal("object")
    });
  });

  describe('getPrimeFactors function', function() {
    it('should accept one params', function() {
      expect(euler003.getPrimeFactors).to.have.length(1);
    });
    it('Should return the prime factors of 13195 are 5, 7, 13 and 29', function(){
      expect(euler003.getPrimeFactors(13195)).to.equal(29);
    });
    it('Should return the prime factors of 600851475143', function(){
      expect(euler003.getPrimeFactors(600851475143)).to.equal(6857);
    });
  });
});
