function chunkArrayInGroups(arr, size) {
  // take arr and break it into chucks size big
  //return that
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
   return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
