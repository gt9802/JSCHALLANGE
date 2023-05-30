//Create Hello World Function
//Write a function createHelloWorld. It should return a new function that always returns "Hello World"

function createHelloWorld(){
    return function(...args){
        return "Hello World"
    }
}

var f = createHelloWorld();
console.log(f(23,null))  //Any arguments could be passed to the function but it should still always return "Hello World"