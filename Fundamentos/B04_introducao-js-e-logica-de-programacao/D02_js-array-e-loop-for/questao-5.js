// Questão 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;

for (let indexTest = 0; indexTest < numbers.length; indexTest += 1) {
  for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    if (numbers[indexTest] >= numbers[indexNumbers]) {
      if (indexNumbers === numbers.length - 1) {
        higherNumber = indexTest;
      }
    } else {
      break;
    }
  }
  if (higherNumber !== 0) {
    break;
  }
}

console.log("O maior número é", numbers[higherNumber]);
