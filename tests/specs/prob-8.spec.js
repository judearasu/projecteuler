/*eslint-env node, mocha */
describe('Euler008', function() {
  describe('Internal Methods', function() {
    it('should be defined', function() {
      expect(typeof euler008).to.be.equal("object")
    });
  });

  describe('getLargestProduct', function() {
    it('should exist', function() {
      expect(euler008.getLargestProduct).to.have.length(1);
    });

    it('should return the product value', function() {
      expect(euler008.getLargestProduct(13)).to.be.equal(23514624000);
    });

  });
});
