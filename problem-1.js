/* 1. Write an arrow function that will take 3 parameters, will multiply the parameters and return the result */
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(10, 5, 20);
console.log(result);

/* 2. Write the following sentence in three lines and print the result:
      I am a web developer. I love to code. I love to eat biryani. */
// previous methode
const myLines1 = 'I am a web developer.\n' +
    'I love to code.\n' +
    'I love to eat biryani.\n';
console.log(myLines1);

// template string
const myLines2 = `I am a web developer.
I love to code.
I love to eat biryani.`;
console.log(myLines2);

/* 3. Write an arrow function that will take 2 parameters. One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result. */
const addTwo = (num1 = 0, num2 = 0) => num1 + num2;
const result2 = addTwo(10);
console.log(result2);