/*eslint-env node, mocha */

describe('Euler002', function() {
  describe('Internal Methods', function() {
    it('should be defined', function() {
      expect(typeof euler002).to.be.equal("object")
    });
  });

  describe('getFibonacci function', function() {
    it('should accept ope params', function() {
      expect(euler002.getFibonacci).to.have.length(1);
    });
    it('should generate the first 10 terms (1, 2, 3, 5, 8, 13, 21, 34, 55, 89,..) starting with 1 and 2', function(){
        expect(euler002.getFibonacci(89)).to.be.equal(44);
    });
  });
});
