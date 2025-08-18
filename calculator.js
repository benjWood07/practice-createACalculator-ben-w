// Step 1: Individual functions for each operation
function absoluteValue(number) {                                    // Absolute Value Calculation
    return Math.abs(number);
}
function powerCalculation(base, exponent) {                         // Power Calculation
    return Math.pow(base, exponent);
}
function squareRoot(number) {                                       // Square Root Finder
    return Math.sqrt(number);
}
function maxAndMinFinder(numbers) {                                 // Maximum and Minimum Finder
    let max = Math.max(numbers);
    let min = Math.min(numbers);
    return `Maximum: ${max} Minimum: ${min}`
}
function randomNumber(min, max) {                                   // Random Number Generator
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function customRounding(number, decimalPlaces) {                    // Custom Rounding
    return Math.round(number * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
}
// Step 2: Test each function with sample inputs
console.log(`Absolute value of -10: ${absoluteValue(-10)}`);               // Use console.log to test each function
console.log(`2 to the power of 4: ${powerCalculation(2, 4)}`);
console.log(`Square root of 25: ${squareRoot(25)}`);
console.log(`Max and Min of [1, 5, 3]: ${maxAndMinFinder([1, 5, 3])}`);
console.log(`Random number between 1-10: ${randomNumber(1, 10)}`);
console.log(`Round 3.14159 to 2 decimals: ${customRounding(3.14159, 2)}`);
// Step 3: Combine individual functions into a calculator function
function calculator(operation, firstValue, secondValue, arrayValue) {     // Use calculator function to select operation based on user input
    if (operation === 'abs') {
        return absoluteValue(firstValue);
    } else if (operation === 'power') {
        return powerCalculation(firstValue, secondValue);
    } else if (operation === 'sqrt') {
        return squareRoot(firstValue);
    } else if (operation === 'maxmin') {
        return maxAndMinFinder(arrayValue);
    } else if (operation === 'random') {
        return randomNumber(firstValue, secondValue);
    } else if (operation === 'round') {
        return customRounding(firstValue, secondValue);
    } else {
        return "Invalid operation";
    }
}
// Step 4: Test the calculator with the specified requirements
console.log(`Absolute value of -45.67: ${calculator('abs', -45.67)}`);                     // Find the absolute value of -45.67
console.log(`5 to the power of 3: ${calculator('power', 5, 3)}`);                          // Raise 5 to the power of 3
console.log(`Square root of 144: ${calculator('sqrt', 144)}`);                             // Calculate the square root of 144

const testArray = [3, 78, -12, 0.5, 27];                                                   // Determine the largest and smallest values from [3, 78, -12, 0.5, 27]
const result = calculator('maxmin', testArray);
console.log(`Max and Min from [3, 78, -12, 0.5, 27]: Max = ${result.max}, Min = ${result.min}`);
console.log(`Random number between 1 and 50: ${calculator('random', 1, 50)}`);             // Generate a random number between 1 and 50
console.log(`23.67891 rounded to 2 decimal places: ${calculator('round', 23.67891, 2)}`);  // Round 23.67891 to 2 decimal places