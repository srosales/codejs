setTimeout(function(){
    console.log("hello")
},1000); //waits 1 second

console.log("Bye");


var timeout = setTimeout(function(){
    console.log("hello")
},1000); //waits 1 second

clearTimeout(timeout); //clears the setTimeout
// callback from running
