let arrTwo = [
  12, 564, 56, 4, 213, 546, 87, 546, 56, 56, 56, 56, 546, 54, 87, 54, 5, 87, 89,
  546, 879, 54, 879, 564, 879, 546, 13, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9,
];

arrTwo.sort((a, b) => b - a);

document.write(arrTwo + "<br>");

let unique = [];
for (let i = 0; i < arrTwo.length; i++) {
  if (arrTwo[i] == arrTwo[i + 1] || arrTwo[i] == arrTwo[i - 1]) {
    continue;
  } else {
    unique.push(arrTwo[i]);
  }
}
document.write(unique);
