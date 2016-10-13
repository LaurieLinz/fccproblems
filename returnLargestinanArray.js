function largestOfFour(arr) {
  
  // sort array largest to smallest
  //   var sorted = arr.sort(function(a, b) {
  //     return a - b;
  //   });
  // pop off the element
  //   highest = sorted.pop();
  // push that onto a new array
  //   return highest;
  
  var sorted = [];
  arr.forEach(function(item) {
    sorted.push(item.sort(function(a, b) { return b > a;}) [0]);
  });
  
  return sorted;
}
  
  


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
