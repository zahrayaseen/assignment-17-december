function calculateFactorial(num: number): number {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}
const inputNumber = 6;
const result = calculateFactorial(inputNumber);
console.log(`The factorial of ${inputNumber} is: ${result}`);
