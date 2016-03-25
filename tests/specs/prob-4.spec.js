/*eslint-env node, mocha */

describe.only('Euler004', function() {
  describe('Internal Methods', function() {
    it('should be defined', function() {
      expect(typeof euler004).to.be.equal("object")
    });
  });

  describe('isPalindrome function', function() {
    it('should accept two params', function() {
      expect(euler004.isPalindrome).to.have.length(1);
    });

    it('should return false, when 6544 number is passed as it doesnt read forward or backward', function() {
      expect(euler004.isPalindrome(6544)).to.be.false;
    });

    it('should return true, when 3333 number is passed as it doesnt read forward or backward', function() {
      expect(euler004.isPalindrome(3333)).to.be.true;
    });
  });

  describe('largestPalindrome', function() {
    it('should accept two params', function() {
      expect(euler004.largestPalindrome).to.have.length(2);
    });
    it('should return largest palindrome made from the product of two 3-digit numbers', function(){
      expect(euler004.largestPalindrome(100,999)).to.be.equal(906609);
    });
  });
});
