//A palindromic number reads the same both ways.
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.

var euler004 = (function() {
  return {
    isPalindrome: isPalindrome,
    largestPalindrome: largestPalindrome
  };

  var product;

  function isPalindrome(num) {
    return num === parseInt(num.toString().split('').reverse().join(''));
  }

  function largestPalindrome(min_range, max_range) {
    var arr = [];
    for(var x = min_range; x <= max_range; x++){
      for(var y = x; y <= max_range; y++){
        product = x * y;
        if(isPalindrome(product)){
          arr.push(product);
        }
      }
    }
    return Math.max.apply(null, arr);
  }
})();
