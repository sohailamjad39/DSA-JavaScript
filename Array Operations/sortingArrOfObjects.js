let arrObj = [
  { name: "Sohail", age: 21 },
  { name: "Ali", age: 12 },
  { name: "Hasaan", age: 14 },
  { name: "Rafay", age: 19 },
];

// let l = arrObj.length;
// for (let i = 0; i < l; i++) {
//   for (let j = 0; j < l - i - 1; j++) {
//     if (arrObj[j].age > arrObj[j + 1].age) {
//       [arrObj[j], arrObj[j + 1]] = [arrObj[j + 1], arrObj[j]];
//     }
//   }
// }

// document.write(JSON.stringify(arrObj));

// OR

arrObj.sort((a, b) => a.name - b.name);
document.write(JSON.stringify(arrObj));
