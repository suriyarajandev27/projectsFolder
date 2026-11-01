let display = document.getElementById("textBox");

function appendToDisplay(input){
    display.value += input;
}

function clearToDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value)
}