//uses a callback to process two numbers
function calculate(x,y,compute){
   return compute(x,y);
}

var c = calculate(10,5,function(x,y){ //uses an anonymous callback
    return x - y; //subtracts y from x
});
console.log(c); // logs 5

//Notice how an anonymous callback is used with arrow functions:
var d = calculate(10,5, (x,y) => {return x - y});
//using arrow functions

console.log(d); // logs 5
