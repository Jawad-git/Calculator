//create a sum function.
function sum(a, b)
{
    return a + b;
}

//create a substraction function
function subtract(a, b)
{
    return a - b;
}

//create a multiply function
function multiply(a, b)
{
    return a*b;
}

//create a division function
function divide(a, b)
{
    if (b == 0)
    {
        alert("tried dividing by a 0! Big mistake chief");
        return 1;
    }
    return a / b;
}

//create a modulo function
function modulo(a, b)
{
    return a % b;
}

//Create a function called operate, taking the operator in addition to two numbers
//and determines which function it should call between (sum, addition, substraction, division).

function operate(a, operator, b)
{
    switch(operator)
    {
        case "+":
            sum(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
    }
}