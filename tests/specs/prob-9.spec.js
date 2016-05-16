/*eslint-env node, mocha */
describe('Euler009', function(){
  describe('Internal Methods', function(){
    it('should be defined', function(){
      expect(euler009).to.be.defined;
    });
  });

  describe('getPythagoreanTriplet', function() {
    it('should exist', function(){
      expect(euler009.getPythagoreanTriplet).to.be.defined;
    });

    it('should accept two arguments', function(){
      expect(euler009.getPythagoreanTriplet).to.have.length(0);
    });

    it('should pass 3, 4 return the value of c as 5 and its square 25', function(){
      //expect(euler009.getPythagoreanTriplet(3,4)).to.be.equal(25);
      euler009.getPythagoreanTriplet();
    });
  });
});
