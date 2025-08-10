let newArr = [0, 1, false, 2, null, "", undefined, 3, NaN, "hello"];
document.write("New Array: " + newArr);

let filteredArray = newArr.filter(Boolean);
document.write("<br>Filtered Array: " + filteredArray);
