const numbers = [1, 2, 3, 4, 5];

function isEven(number) {
  return number % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // Output: [2, 4]
