/**
 * Write an arrow function where it will do the following:
 * 
 * a) Square each array element
 * b) Calculate the sum of the squared elements
 * c) Return the average of the sum of the squared elements
 * 
 * Print the result.
 */

const averageOfSquare = numbers => {
    let sum = 0, countNumbers = 0;
    for (let number of numbers) {
        sum += Math.pow(number, 2);
        countNumbers++;
    }
    const average = sum / countNumbers;
    return average;
}

const numbersList = [20, 10, 30, 20, 100, 60, 10];
const squaredAverage = averageOfSquare(numbersList);
console.log(squaredAverage);