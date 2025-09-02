// let str = [
//     "Sohail",
//     "Coder",
//     "Developer",
//     "MERN",
//     "Full Stack",
//     "Software Engineer",
//     "NUTECH",
//   ];

for (let i = 0; i < n; i++) {
  let maxIdx = i;
  for (let j = i + 1; j < n; j++) {
    if (str[j] > str[maxIdx]) {
      maxIdx = j;
    }
  }
  let temp = str[i];
  str[i] = str[maxIdx];
  str[maxIdx] = temp;
  temp = null;
}

document.write(str);
