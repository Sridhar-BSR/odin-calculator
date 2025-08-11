//s1
function add(a,b){
    return a+b;
}
console.log(add(2,3));

function subtract(a,b){
    return a-b;
}
console.log(subtract(2,3));
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));
function divide(a,b){
    if (b===0){
        return "Error:Cannot divide by zero"
    }
    return a/b;
}
console.log(divide(2,5));
//s2

let firstnumber=3;
let operator="+";
let secondnumber=5;

let result;
if(operator==="+"){
    result= firstnumber + secondnumber;
}
else if(operator==="-"){
    result= firstnumber - secondnumber;
}
else if(operator==="*"){
    result= firstnumber * secondnumber;
}
else if(operator==="/"){
    if(secondnumber===0){
        result="Error:cannot divide by zero";
    }
    else{
        result=firstnumber/secondnumber;
    }
   
    
}
console.log(result);
//s3
function operate(operator,num1,num2){
    return operator(num1,num2);

}
