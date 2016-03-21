/** Modular Patter **/
// 	var euler001 = (function(){
// 		'use strict';
// 		var sum = 0;
// 		var n = 1000;
//
// 		while(n--){
// 			if(n%3 === 0 || n%5 ===0){
// 				sum +=n;
// 			}
// 		}
// 		console.log(sum);
// 		return sum;
// })();


// var euler001 = (function(){
// 	var soln ={};
// 			soln.calculate = function(sum, n){
// 				while(n--){
// 					if(n%3 ===0 || n%5 ===0){
// 						sum+=n;
// 					}
// 				}
// 				console.log(sum);
// 				return sum;
// 			};
// 			return soln;
// })();

var euler001 = (function() {
	'use strict';
  return {
    calculate: getNaturalNumbers
  };

  function getNaturalNumbers(sum, n) {
    while (n--) {
      if (n % 3 === 0 || n % 5 === 0) {
        sum += n;
      }
    }
		return sum;
  }
})();
