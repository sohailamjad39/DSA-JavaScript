arr.sort((a, b) => a - b);

let duplicates = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    duplicates.push(arr[i]);
  }
}

document.write("Duplicates: " + duplicates);
