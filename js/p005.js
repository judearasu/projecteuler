//2520 is the smallest number that can be divided by each of the numbers
//from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the
//numbers from 1 to 20?

/**
Ref : http://math.stackexchange.com/questions/328478/find-smallest-multiple-of-specific-set-of-numbers
Acceptance Criteria:

Find the prime number from 1 to  20 and then find the highest exponent on the lowest price minus the largest prime.
**/

var euler005 = (function(){
  return {
    getSmallestMultiple : getSmallestMultiple,
    isPrime : isPrime,
    setPrimes : setPrimes
  };

  function getSmallestMultiple(min_value, max_value){
      setPrimes(min_value, max_value);
  }

  function setPrimes(min_value, max_value){
    var primeNumbers = [];

       for(var i = min_value; i <= max_value; i++){
         if(isPrime(i)){
           primeNumbers.push(i);
         }
       }
       return primeNumbers;
  }
  function isPrime(num){
      var x = 2, y = 1;
      if( num === x){
        return true;
      }
      if( num === y){
        return false;
      }
      // Use Square root to reduce iteration
      var sqrt = Math.sqrt(num);
      while(x <= sqrt){
        if(num % x === 0){
          return false;
        }
        x++;
      }
      return true;
  }

})();
