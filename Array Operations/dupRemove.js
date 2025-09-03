let arr6 = [1, 2, 2, 2, 2, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 8, 9, 9];
arr6.sort((a, b) => a - b);
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] == arr6[i + 1]) {
    arr6.splice(i, 1);
    i--;
  }
}
document.write(arr6);
