function calculateSum(numbers: number[]): number {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const inputArray = [1, 2, 3, 4, 5];
const resultSum = calculateSum(inputArray);

console.log("Sum of Numbers:", resultSum);
