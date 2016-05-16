/*eslint-env node, mocha */
describe.only('Euler0010', function() {
  var obj1;
  it('should be defined', function() {
    expect(euler010).to.be.defined;
  })

  beforeEach(function() {
    obj1 = new euler010();
  });
  describe('Prime number method', function(){
    it('should accept only one argument',function(){
      expect(obj1.getPrimeNumbers).to.have.length(1);
    });
    it('should return true for number 5, as 5 is a prime number', function(){
      expect(obj1.getPrimeNumbers(5)).to.be.true;
    });
    it('should return false for number 4, as 4 is a even number', function(){
      expect(obj1.getPrimeNumbers(4)).to.be.false;
    });
  });
});
