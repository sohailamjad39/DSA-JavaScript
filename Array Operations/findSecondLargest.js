let arr4 = [100, 90, 95];

let f, s;

if (arr4[0] > arr4[1]) {
  f = arr4[0];
  s = arr4[1];
} else {
  f = arr4[1];
  s = arr4[0];
}

for (let i = 2; i < arr4.length; i++) {
  if (arr4[i] > f) {
    s = f;
    f = arr4[i];
  } else if (arr4[i] < f && arr4[i] > s) {
    s = arr4[i];
  }
}

document.write("Array: " + arr4);
document.write("<br>Second Largest Number: " + s);
