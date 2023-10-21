function calculate() {
    var num1 = +(prompt('Enter the first number:'));
    var operator = prompt('Enter an operator (+, -, *, /):');
    var num2 = +(prompt('Enter the second number:'));

    if (isNaN(num1) || isNaN(num2)) {
        alert('Invalid input. Please enter valid numbers.');
        return;
    }

    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Division by zero is not allowed.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operator. Please use +, -, *, or /.');
            return;
    }

    alert('Result: ' + result);
}


calculate();
