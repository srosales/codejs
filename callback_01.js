//multiplies two numbers
function mult(x,y){
   return x * y;
}

//adds to numbers
function add(x,y){
   return x + y;
}

//uses a callback to process two numbers
function calculate(x,y,compute){
   return compute(x,y);
}

var a = calculate(10,5,add); //uses add callback
console.log(a); // logs 15

var b = calculate(10,5,mult); //uses mult callback
console.log(b); // logs 50
