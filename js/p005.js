//2520 is the smallest number that can be divided by each of the numbers
//from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the
//numbers from 1 to 20?

/**
Ref : http://math.stackexchange.com/questions/328478/find-smallest-multiple-of-specific-set-of-numbers
Acceptance Criteria:

Find the prime number from 1 to  20 and then find the highest exponent on the lowest price minus the largest prime.
**/

var euler005 = (function() {
  var PRIME_NUMBERS = [];
  var SMALL_MUL = [];
  return {
    getSmallestMultiple: getSmallestMultiple,
    _setPrimes: _setPrimes,
    _isPrime: _isPrime,
    _getHighestExponent: _getHighestExponent

  };


  function getSmallestMultiple(min_value, max_value) {
    _setPrimes(min_value, max_value);
    //return Math.max.apply(null,PRIME_NUMBERS);
    _getHighestExponent(PRIME_NUMBERS, max_value);
    var total = SMALL_MUL.reduce(function(a, b) {
      return a * b;
    });
    return total;
  }

  function _setPrimes(min_value, max_value) {
    for (var i = min_value; i <= max_value; i++) {
      if (_isPrime(i)) {
        PRIME_NUMBERS.push(i);
      }
    }
    return PRIME_NUMBERS;
  }

  function _getHighestExponent(PRIME_NUMBERS, max_value) {
    //The highest exponent on 2 in any prime factorization of a number between 1 and 20 is 4,
    //as 2 Pow 4 = 16 but 2 pow 5=32>20
    for (var i = 0; i <= PRIME_NUMBERS.length; i++) {
      var powerValue = 4;
      _powerCalculator(PRIME_NUMBERS[i], powerValue, max_value);
    }
  }

  function _powerCalculator(primeNumber, powerValue, max_value) {
    for (var j = 4; j >= 1; j--) {
      if (Math.pow(primeNumber, powerValue) < max_value) {
        var output = Math.pow(primeNumber, powerValue);
        SMALL_MUL.push(output);
        break;
      }
      powerValue -= 1
    }
    return SMALL_MUL;
  }

  function _isPrime(num) {
    var x = 2;
    var y = 1;
    if (num === x) {
      return true;
    }
    if (num === y) {
      return false;
    }
    // Use Square root to reduce iteration
    var sqrt = Math.sqrt(num);
    while (x <= sqrt) {
      if (num % x === 0) {
        return false;
      }
      x++;
    }
    return true;
  }

})();
