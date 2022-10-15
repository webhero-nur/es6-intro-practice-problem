/**
 * Write an arrow function where it will do the following:
 * 
 * a) It will take two array inputs
 * b) Combine the two arrays and assign them in a new array
 * c) Find the maximum number from the new array and return the result
 * 
 * Print the result.
 */

const maxInTwoArray = (array1, array2) => {
    const combineArray = array1.concat(array2);
    const maxInAll = Math.max(...combineArray);
    return maxInAll;
};

const arr1 = [63, 54, 16, 89, 49, 68, 47];
const arr2 = [64, 51, 65, 34, 81];
const max = maxInTwoArray(arr1, arr2);
console.log(max);
