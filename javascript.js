let inputDisplay = "0";
let resultDisplay=false;

//update the display
function updateDisplay(){
    const displayInput = document.getElementById("display");
    displayInput.textContent = inputDisplay;
    }
// clear all input
function clearAll(){
    inputDisplay = '0'
    updateDisplay();
};
//adding numbers and operands to display
function appendToDisplay(value){
    if(inputDisplay === "0"){
        inputDisplay = value;
    }
    else if(resultDisplay = true){
        inputDisplay += value;
    }
    else {
        inputDisplay += value;
    }
    resultDisplay = false;
    updateDisplay();
}

//run calculation
function calculate(x, op, y){
//check in there is a negative number
    if(inputDisplay.charAt(0) == "-"){
        inputDisplay = inputDisplay.substring(1);
        let ch = '-'
        op = inputDisplay.replace(/[0-9]/g,'');
        inputDisplay = ch + inputDisplay; 
        switch(op){
            case `+`:
                numbers = inputDisplay.split(`+`)
                x = Number(numbers[0]);
                y = Number(numbers[1]);
                result = x + y;
                inputDisplay = result.toString();
                updateDisplay();
                resultDisplay=true;
                break;
            case `-`:
                numbers = inputDisplay.split(`-`)
                x = Number(numbers[0]);
                y = Number(numbers[1]);
                result = x - y;
                inputDisplay = result.toString();
                updateDisplay();
                resultDisplay=true;
                break;
            case `*`:
                numbers = inputDisplay.split(`*`)
                x = Number(numbers[0]);
                y = Number(numbers[1]);
                result = x * y;
                inputDisplay = result.toString();
                updateDisplay();
                resultDisplay=true;
                break;
            case `/`:
                numbers = inputDisplay.split(`/`)
                x = Number(numbers[0]);
                y = Number(numbers[1]);
                result = x / y;
                inputDisplay = result.toString();
                updateDisplay();
                resultDisplay=true;
                break;
            }    
    }
    //normal calculation
    else{
    op = inputDisplay.replace(/[0-9]/g,'');
    switch(op){
        case `+`:
            numbers = inputDisplay.split(`+`)
            x = Number(numbers[0]);
            y = Number(numbers[1]);
            result = x + y;
            inputDisplay = result.toString();
            updateDisplay();
            resultDisplay=true;
            break;
        case `-`:
            numbers = inputDisplay.split(`-`)
            x = Number(numbers[0]);
            y = Number(numbers[1]);
            result = x - y;
            inputDisplay = result.toString();
            updateDisplay();
            resultDisplay=true;
            break;
        case `*`:
            numbers = inputDisplay.split(`*`)
            x = Number(numbers[0]);
            y = Number(numbers[1]);
            result = x * y;
            inputDisplay = result.toString();
            updateDisplay();
            resultDisplay=true;
            break;
        case `/`:
            numbers = inputDisplay.split(`/`)
            x = Number(numbers[0]);
            y = Number(numbers[1]);
            result = x / y;
            inputDisplay = result.toString();
            updateDisplay();
            resultDisplay=true;
            break;
        }
    }    
}
