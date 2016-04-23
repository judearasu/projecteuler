// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var euler009 = (function() {
  var a,b,c;
  return {
    getPythagoreanTriplet: getPythagoreanTriplet
  };

  function getPythagoreanTriplet(){
    a = 1;
    b = a + 1;
    while(a < 1000){
      while(b > a && b < 1000){
        c = 1000 -a -b;
        if(c < b){
          break;
        }
        if(Math.pow(a,2)+Math.pow(b,2) === Math.pow(c,2)){
          console.log(a,b,c, a+b+c, Math.pow(a,2)+Math.pow(b,2),Math.pow(c,2));
          return a*b*c;
        }
        b++;
      }
      a++;
      b = a+1;
    }
  }

})();
