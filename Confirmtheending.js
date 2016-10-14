function confirmEnding(str, target) {
//   ends = str.split('').pop();
//   if (target === ends) {
//   return true;
//   } else {
//   return false; } 
  
  
  return str.substr(-target.length) === target;
 
}

confirmEnding("Bastian", "n");
