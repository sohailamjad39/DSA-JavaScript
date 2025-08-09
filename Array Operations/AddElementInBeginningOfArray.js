// arr.unshift(122);
// document.write("Updated Array: " + arr);

// OR 

for (let i = arr.length - 1; i >= 0; i--) {
  arr[i + 1] = arr[i];
}
arr[0] = 22;
 
document.write("Updated Array: " + arr);
