/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    // Add to number and return the result
    //console.log('executing function add ' + number1 + '  ' + number2)
    return number1 + number2;
}

function addNumbers(){
    // Get the numbers typed by the user, add them and show the result on the screen
    document.querySelector('#sum').value = add(Number(document.querySelector('#add1').value), Number(document.querySelector('#add2').value));
}

// On click, call the function do add the numbers
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    // Subtract two numbers and return the result
    //console.log('executing function subtract ' + number1 + '  ' + number2)
    return number1 - number2;
}

function subtractNumbers(){
     // Get the numbers typed by the user, subtract them and show the result on the screen
     document.querySelector('#difference').value = subtract(Number(document.querySelector('#subtract1').value), Number(document.querySelector('#subtract2').value));
}

// On click, call the function to subtract the numbers
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = (factor1, factor2) => document.querySelector('#product').value = multiply(Number(document.querySelector('#factor1').value), Number(document.querySelector('#factor2').value));

// On click, call the function to multiply the numbers
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;

const divideNumbers = (dividend, divisor) => document.querySelector('#quotient').value = divide(Number(document.querySelector('#dividend').value), Number(document.querySelector('#divisor').value));

// On click, call the function to divide the numbers
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

// 
let currentDate = new Date();
document.getElementById("year").innerHTML = new Date().getFullYear();

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbers;

/* Output Odds Only Array */
const checkOddNumber = (number) => number%2 != 0;
document.getElementById("odds").innerHTML = numbers.filter(checkOddNumber);

/* Output Evens Only Array */
const checkEvenNumber = (number) => number%2 == 0;
document.getElementById("evens").innerHTML = numbers.filter(checkEvenNumber);

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbers.reduce((total, num) => total += num);

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbers.map((number) => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = numbers.map((number) => number * 2).reduce((total, num) => total += num);
