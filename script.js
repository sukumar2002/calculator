let dis = document.getElementById('display');


function appendToDisplay(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}


function calculateResult() {
    try {
        display.value = eval(dis.value); 
    } catch (error) {
        display.value = 'Error';
    }
}
f