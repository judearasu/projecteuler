/*eslint-env node, mocha */
// describe('Problem one', function () {
// 	describe('Internal Function1', function(){
// 		expect('1').to.equal('1');
// 	})
// });

describe('Euler001', function() {
  describe('Internal Methods', function() {
    it('should be defined', function() {
      expect(typeof euler001).to.be.equal("object")
    });
  });

  describe('calcuate function', function() {
    it('should accept two params', function() {
      expect(euler001.calculate).to.have.length(2);
    });

    it('should return 23 when the natural numbers are below 10 and divisible by 3 or 5', function(){
      expect(euler001.calculate(0,10)).to.be.equal(23);
    });
  });
});
