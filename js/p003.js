//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?
var euler003 = (function() {
  return {
    getPrimeFactors: getPrimeFactors
  };

  function getPrimeFactors(num) {
    // Starting index 2 as prime

    var i = 2;

    while (num > i) {
      if (num % i === 0) {
        num = num / i;
      }

      i++;
    }

    console.log(i);
    return i;
  }
})();
