//The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


var euler006 = (function() {

  var x = 0;
  var y = 0;
  var i = 0;
  var j = 0;
  var sum;

  return {
    getSumOfSquares: getSumOfSquares,
    getSquaresOfSum: getSquaresOfSum,
    getDiff: getDiff
  };

  function getSumOfSquares(max) {
    while (i <= max) {
      x += Math.pow(i, 2);
      i++;
    }
    return x;
  }

  function getSquaresOfSum(max) {
    for (j; j <= max; j++) {
      y += j;
    }
    sum = Math.pow(y, 2);
    return sum;
  }

  function getDiff() {
    return result = sum - x;
  }

})();
