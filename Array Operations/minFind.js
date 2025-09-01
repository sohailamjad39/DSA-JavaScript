// let arr3 = [5, 7, 8, 6, 9, 1, 4, 2, 3];

let min = 0;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] < arr3[i + 1]) {
    min = arr3[i];
  }
  for (let j = 0; j < arr3.length; j++) {
    if (arr3[j] < min) {
      min = arr3[j];
    }
  }
}

document.write(min);

// OR

// arr3.sort((a, b) => a - b);
// document.write(arr3[0]);
