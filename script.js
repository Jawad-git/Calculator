//create a sum function.
function sum(a, b)
{
    return Number(a) + Number(b);
}

//create a substraction function
function subtract(a, b)
{
    return Number(a) - Number(b);
}

//create a multiply function
function multiply(a, b)
{
    return Number(a) * Number(b);
}

//create a division function
function divide(a, b)
{
    if (b == 0)
    {
        alert("tried dividing by a 0! Big mistake chief");
        return 'error';
    }
    return Number(a) / Number(b);
}

//create a modulo function
function modulo(a, b)
{
    if (b == 0)
    {
        alert("tried dividing by a 0! Big mistake chief");
        return 'error';
    }
    return Number(a) % Number(b);
}

//Create a function called operate, taking the operator in addition to two numbers
//and determines which operator function it should call.

function operate(a, operator, b)
{
    switch(operator)
    {
        case "+":
            return sum(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "x":
            return multiply(a, b);
            break;
        case "÷":
            return divide(a, b);
            break;
        case "%":
            return modulo(a, b);
            break;
    }
}

//making array that stores the values entered by user
let values = [30];
let i = 0;
let j = 0;
let result = null;
let comeon = 'whatever';

//Making function that clears calculator display when we press "AC".
    const displaytop = document.querySelector('.head');
    const displaybottom = document.querySelector('.result');
    const bye = document.querySelector('.clear');
    console.log(bye);

    bye.addEventListener('click', () => {
        displaytop.innerHTML = '';
        displaybottom.innerHTML = '';
        // Not finished: reset the values
        i = 0; 
        result = 0;
        for (let k = 0; k < 30; k++)
        {
            values[k] = null; 
        }
    });


//MAKING CODE THAT POPULATES THE DISPLAY WHEN BUTTONS ARE PRESSED

function append(whatever)
{
    let child = document.createElement("span");
    child.textContent = whatever;
    displaytop.appendChild(child);
    // populaate the array based on input, increment when an operator is inputted
    if (whatever == 'x' || whatever == '÷' || whatever == '%' || whatever == '-' || whatever == '+')
    {
        values[++i] = whatever;
        i++;
    }
    else
    {
        values[i] = Number(whatever) + (values[i] * 10);
    }
}
//rest is written as inline in html 
    

// Create a function to compute a single pair
let o = 1;
function computePair()
{
    return operate(values[o-1], values[o], values[o+1]);
}

// Create a function to compute several pairs together, computing the first 3 values in the array
// which are (number operator number) and then replacing the 3 values with their computed value
function calculate()
{
    while (values[o] != null && values[o+1] != null)
    {
        let newresult = computePair();
        values.splice(0, 3, `${newresult}`);
    }
    //if (i %)
    return values[o-1];
}


// make the equal button functional and it should output the result and make i = 0
// so that we can reuse the calculator without clearing everything.
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
displaybottom.innerHTML = '';
i = 0;
result = calculate();
result = Number(result).toFixed(4);
resulttext = document.createElement('span');
resulttext.textContent = `${result}`;
displaybottom.appendChild(resulttext); 
})
