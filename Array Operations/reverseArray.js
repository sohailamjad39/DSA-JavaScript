let arrRev = [55, 44, 66, 88, 22, 99, 11, 33, 77];
document.write("Before Reverse: " + arrRev);
for (let i = 0; i < Math.floor(arrRev.length / 2); i++) {
  let temp = arrRev[i];
  arrRev[i] = arrRev[arrRev.length - 1 - i];
  arrRev[arrRev.length - 1 - i] = temp;
}
document.write("<br>After Reverse: " + arrRev);
