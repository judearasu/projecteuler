/*eslint-env node, mocha */

describe.only('Euler005', function() {
  describe('Internal Methods', function() {
    it('should be defined', function() {
      expect(typeof euler005).to.be.equal("object")
    });
  });

  describe('isPalindrome function', function() {
    it('should accept two params', function() {
      expect(euler005.getSmallestMultiple).to.have.length(1);
    });
  });
});
