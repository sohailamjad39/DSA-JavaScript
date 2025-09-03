let tempArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    tempArr.push(arr[i]);
  }
}
document.write("Check for all elements: " + tempArr);
tempArr = null;

// For only 1

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    document.write("<br>Check for only one element:" + arr[i]);
    break;
  }
}
