function removeNegativeNumbers(numbers: number[]): number[] {
  const Array = numbers.filter((number) => number >= 0);
  return Array;
}

const inputArray = [1, -2, 3, -4, 5, -6];
const resultArray = removeNegativeNumbers(inputArray);

console.log("Array without Negative Numbers:", resultArray);
export {};
