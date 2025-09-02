let str = [
  "Sohail",
  "Coder",
  "Developer",
  "MERN",
  "Full Stack",
  "Software Engineer",
  "NUTECH",
];

let n = str.length;
for (let i = 0; i < n; i++) {
  let minIdx = i;
  for (let j = i + 1; j < n; j++) {
    if (str[j] < str[minIdx]) minIdx = j;
  }
  let temp = str[i];
  str[i] = str[minIdx];
  str[minIdx] = temp;
  temp = null;
}

document.write(str);
