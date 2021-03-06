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

    // returns false so that the page does not restart
    return false;
});

$('#button0, #button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8, #button9').click(function() {

    // if finalResult is previously calculated, and a number is clicked directly after, 
    // a new calculation should occur
    // display only shows the clicked number
    if (secondNumber === Number.parseInt(display.val())) {
        display.val('');
        secondNumber = null;
    } 
    
    // on any of the numbers, on click, append to display,
    var value = $(this).val();

    // take the current value in display, and concatenate it to the current value
    value = display.val() + value;
    display.val(Number.parseInt(value));

    return false;
});

$('#addButton, #subtractButton, #multiplyButton, #divideButton').click(function() {
    // assign display value into firstNumber
    firstNumber = Number.parseInt(display.val());

    // assign clicked button value to operator
    operator = $(this).val();

    // clear display, to prepare for next set of numbers
    display.val('');

    operatorCount = operatorCount + 1;
    return false;
});

$('#equalsButton').click(function() {
    // assign display value into secondNumber
    secondNumber = Number.parseInt(display.val());

    if (operator === '+') {
        finalResult = firstNumber + secondNumber;
    } else if (operator === '-') {
        finalResult = firstNumber - secondNumber;
    } else if (operator === '÷') { 
        if (firstNumber === 0 || secondNumber === 0) {
            finalResult = "Infinity";
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
    secondNumber = finalResult;

    return false;
});





