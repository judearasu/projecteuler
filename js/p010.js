//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.
var euler010 = function() {};

euler010.prototype.getPrimeNumbers = function(value) {
  var x = 2;
  var y = 1;
  if (value === x) {
    return true;
  }
  if (value === y) {
    return false;
  }
  // Use Square root to reduce iteration
  var sqrt = Math.sqrt(value);
  while (x <= sqrt) {
    if (value % x === 0) {
      return false;
    }
    x++;
  }
  return true;
};

euler010.prototype.sumPrimes = function(range) {
  var n = 1;
  var sum = [];
  while (n <= range) {
    if (this.getPrimeNumbers(n)) {
      sum.push(n);
    }
    n++;
  }
  return sum.reduce(function(a, b) {
    return a + b;
  });
};
