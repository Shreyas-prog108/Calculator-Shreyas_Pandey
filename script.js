const display=document.getElementById('display');
function appendNumber(number){
display.value+=number;
}
function appendOperator(operator){
    if (display.value && !isNaN(display.value.slice(-1))) {
    display.value+=operator;
}}
function clearDisplay(){
display.value='';
}
function deleteLast(){
display.value=display.value.slice(0, -1);
}
function calculateResult(){
try{
display.value=eval(display.value);
} catch(error){
display.value='Error';
}}
function calculatePercentage(){
    display.value=(parseFloat(display.value)/100).toString();
}
function calculateSquareRoot(){
    display.value=Math.sqrt(parseFloat(display.value)).toString();
}
function calculateSquare(){
    display.value=Math.pow(parseFloat(display.value),2).toString();
}


