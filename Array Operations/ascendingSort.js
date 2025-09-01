let array = [9, 2, 8, 3, 6, 5, 7, 1, 4];

function ascSort(array) {
  if (array.length <= 1) return array;

  let pivot = array[array.length - 1];
  let left = [],
    right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  return [...ascSort(left), pivot, ...ascSort(right)];
}

array = ascSort(array);
pivot = null;
left = null;
right = null;

document.write("Ascending Sort: ", array);

// OR

// array.sort((a, b) => a - b);
