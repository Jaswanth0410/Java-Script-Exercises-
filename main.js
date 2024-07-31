// Generating an array of a range
console.log("Generating an array of a range");
const array = Array.from({ length: 10 }, (_, i) => i + 2);
console.log(array);

// intersection of two arrays

console.log("Intersection of two arrays");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
let intersection = [...new Set(arr1)].filter(x => arr2.includes(x));
console.log(arr1);
console.log(arr2);
console.log("Intersected array:"+ intersection);

// Array spreading

console.log("Array Spreading");
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let combinedArray = [...arr3, ...arr4];
console.log(arr3);

// Flattering array

console.log("Flattering array");
let arr5 = [[1, 2], [3, 4], [5, 6]];
console.log(arr5);
let flattenedArray = arr5.flat();
console.log(arr5);
console.log("Flattened array:", flattenedArray);

// Sorting array in descending order

console.log("Sorting array in descending order");
let arr6 = [1, 3, 5, 2, 4];
console.log(arr6);
arr6.sort((a, b) => b - a);
console.log(arr6);

// Array deduplication

console.log("Array Deduplication");
let arr7 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(arr7);
let uniqueArray = [...new Set(arr7)];
console.log(uniqueArray);

// Array searching

console.log("Array Searching");
let arr8 = [1, 2, 3, 4, 5];
console.log(arr8);
let searchElement = 3;
console.log("Search element:", searchElement);
