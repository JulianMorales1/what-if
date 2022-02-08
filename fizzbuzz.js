const prompt = require('prompt-sync')();

let num1 = Number(prompt('Enter a number: '));

if ((num1%3 + num1%5) === 0){
console.log("FizzBuzz" + " ")   
}else if ((num1%3) === 0){
console.log("Fizz" + " ")             
}else if ((num1%5) === 0){                  
console.log("Buzz" + " ");
}
