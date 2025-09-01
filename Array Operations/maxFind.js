let arr3 = [5, 7, 8, 6, 9, 1, 4, 2, 3];

let max = 0;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > arr3[i + 1]) {
    max = arr3[i];
  }
  for (let j = 0; j < arr3.length; j++) {
    if (arr3[j] > max) {
      max = arr3[j];
    }
  }
}

document.write(max);

// OR

// arr3.sort((a, b) => b - a);
// document.write(arr3[0]);
