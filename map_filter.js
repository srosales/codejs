//Map example
var array = [1,2,3,4,5];

var newArray = array.map(function(x){
    //uses an anonymous callback function
    // to square each element
    return x * x;
});

console.log(newArray);

//Filter example

var array = [1,2,3,4,5];

function isEven(x){ //checks if a value is even
   return x % 2 == 0;
}

var newArray = array.filter(isEven); //uses a callback to check if an element is even

console.log(newArray);
