n = 60;
document.write(`Number: ${n} <br>`);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > n) {
    document.write(
      `First Element greater than ${n} is: ${arr[i]}, at index ${i}. `
    );
    break;
  }
}
