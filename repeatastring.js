function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
  newStr = str.repeat(num);
  return newStr;
  } else {
    return "";
  }
}


repeatStringNumTimes("abc", 3);
