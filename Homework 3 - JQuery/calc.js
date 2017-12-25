/*
 * Implement all your JavaScript in this file!
 */
var firstNumber = null;
var secondNumber = null;
var finalResult = null;
var display = $("input[name='display']");
var operatorCount = 0;
var operator;

$('#clearButton').click(function() {
    firstNumber = null;
    secondNumber = null;
    finalResult = null;
    display.val('');
    operatorCount = 0;
    // console.log("calculator is cleared, firstNumber is " + firstNumber + "and secondNumber is " + secondNumber);
});

$('#button0, #button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8, #button9').click(function() {
    // on any of the numbers, on click, append to display,
    var value = $(this).val();

    // if there is no value in the display, add it
    if (!display.val()) {
        display.val(value);
    } else {
        // else, take the current value in display, and concatenate it to the current value
        value = display.val() + value;
        display.val(value);
    }

    // assign values to var firstNumber and secondNumber
    // if firstNumber is not assigned anything, convert value to number and plug it in
    if (operatorCount >= 1) {
        secondNumber = Number.parseInt(value);
    } else {
        firstNumber = Number.parseInt(value);
    }
    // keep track of operator
    return false;
});

$('#addButton, #subtractButton, #multiplyButton, #divideButton').click(function() {
    operator = $(this).val();
    display.val('');
    operatorCount = operatorCount + 1;
});

$('#equalsButton').click(function() {
    if (operator === '+') {
        finalResult = firstNumber + secondNumber;
    } else if (operator === '-') {
        finalResult = firstNumber - secondNumber;
    } else if (operator === '÷') { // it never seems to enter the division case
        console.log("in division case");
        if (firstNumber === 0 || secondNumber === 0) {
            finalResult = "Infinity";
            console.log("has reached infinity");
        } else {
            finalResult = firstNumber / secondNumber;
        }
    } else if (operator === '*') {
        finalResult = firstNumber * secondNumber;
    }

    console.log("FirstNumber = " + firstNumber + "; operator = " + operator + 
                ", secondNumber = " + secondNumber + "; finalResult = " + finalResult);
    display.val(finalResult);

    // if the first and second var are used and an operator is clicked again
    // secondNumber should move to first number and then clear itself
    firstNumber = finalResult;
    secondNumber = null;
    finalResult = null;
});





