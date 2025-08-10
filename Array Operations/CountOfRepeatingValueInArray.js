let valToCount = 63;
let valCount = 0;
document.write(`Value to Count: ${valToCount} <br>`);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == valToCount) {
    valCount++;
  }
}

document.write(`Value appears ${valCount} times in our array.`);
