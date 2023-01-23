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
//and determines which operator function it should call.

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
            break;
        case "%":
            modulo(a, b);
            break;
    }
}

//Making function that clears calculator display when we press "AC".
    const displaytop = document.querySelector('.head');
    const displaybottom = document.querySelector('.result');
    const fuckoff = document.querySelector('.clear');
    console.log(fuckoff);

    fuckoff.addEventListener('click', () => {
        displaytop.innerHTML = '';
        displaybottom.innerHTML = '';
        // Not finished: reset the values
    });


//MAKING CODE THAT POPULATES THE DISPLAY WHEN BUTTONS ARE PRESSED

function append(whatever)
{
    let child = document.createElement("span");
    child.textContent = whatever;
    displaytop.appendChild(child);
}
//rest is written as inline in html 
    



  //  let some = document.querySelector("body");
   // some.textContent = 'whats going on';