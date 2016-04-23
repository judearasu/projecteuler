// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
//
// 73167176531330624919225119674426574742355349194934
// 96983520312774506326239578318016984801869478851843
// 85861560789112949495459501737958331952853208805511
// 12540698747158523863050715693290963295227443043557
// 66896648950445244523161731856403098711121722383113
// 62229893423380308135336276614282806444486645238749
// 30358907296290491560440772390713810515859307960866
// 70172427121883998797908792274921901699720888093776
// 65727333001053367881220235421809751254540594752243
// 52584907711670556013604839586446706324415722155397
// 53697817977846174064955149290862569321978468622482
// 83972241375657056057490261407972968652414535100474
// 82166370484403199890008895243450658541227588666881
// 16427171479924442928230863465674813919123162824586
// 17866458359124566529476545682848912883142607690042
// 24219022671055626321111109370544217506941658960408
// 07198403850962455444362981230987879927244284909188
// 84580156166097919133875499200524063689912560717606
// 05886116467109405077541002256983155200055935729725
// 71636269561882670428252483600823257530420752963450
//
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

// This problem may be misunderstood by some users. To clear things up, the first three sets of five consecutive digits are these:
// - 73167
// - 31671
// - 16717
// Some people may be confused and initially think that you need to test the first set of five, then the next set of five that don't include the first set at all.
// Your sets will overlap each other.

var euler008 = (function() {
  var digit = '73167176531330624919225119674426574742355349194934' +
    '96983520312774506326239578318016984801869478851843' +
    '85861560789112949495459501737958331952853208805511' +
    '12540698747158523863050715693290963295227443043557' +
    '66896648950445244523161731856403098711121722383113' +
    '62229893423380308135336276614282806444486645238749' +
    '30358907296290491560440772390713810515859307960866' +
    '70172427121883998797908792274921901699720888093776' +
    '65727333001053367881220235421809751254540594752243' +
    '52584907711670556013604839586446706324415722155397' +
    '53697817977846174064955149290862569321978468622482' +
    '83972241375657056057490261407972968652414535100474' +
    '82166370484403199890008895243450658541227588666881' +
    '16427171479924442928230863465674813919123162824586' +
    '17866458359124566529476545682848912883142607690042' +
    '24219022671055626321111109370544217506941658960408' +
    '07198403850962455444362981230987879927244284909188' +
    '84580156166097919133875499200524063689912560717606' +
    '05886116467109405077541002256983155200055935729725' +
    '71636269561882670428252483600823257530420752963450';

  var product = 0;
  var i = 0;
  var temp =1;

  return {
    getLargestProduct: getLargestProduct,
    _multiplier: _multiplier
  };

  function _multiplier(digit, i, limit){
    var mul=1;
    for(var y=0 ; y < limit; y++){
      mul *= digit[i+y];
    }
    return mul;
  }

  function getLargestProduct(limit) {
    var endPoint = digit.length - limit;
    while(i <= endPoint){
      temp = _multiplier(digit,i,limit);
      if(temp > product){
        product = temp;
      }
      i++;
    }
    return product;
  }


})();
