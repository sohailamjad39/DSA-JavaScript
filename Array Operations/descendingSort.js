// let array = [9, 2, 8, 3, 6, 5, 7, 1, 4];

function dscSort(array) {
  if (array.length <= 1) return array;

  let pivot = array[array.length - 1];
  let left = [],
    right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  return [...dscSort(left), pivot, ...dscSort(right)];
}

array = dscSort(array);
pivot = null;
left = null;
right = null;

document.write("Descending Sort: ", array);

// OR

// array.sort((a, b) => b - a);
