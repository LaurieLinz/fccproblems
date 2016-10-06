function sumAll(arr) {
  
//   take the biggest number
 var max = Math.max(...arr);
//   take the smallest number
 var min = Math.min(...arr);
//   take each number inbetween store in an array and return
 newArr = [];
  for (var i = min; i <= max; i++) {
    newArr.push(i);} 
//   add each number
var sum = newArr.reduce((a, b) => a + b, 0);
 return sum;
  };

sumAll([1, 4]);
