const prompt = require('prompt-sync')();

let num1 = Number(prompt('Enter your Earth Weight: '));

let num2 = Number(prompt('Enter a Planet Number: '));

if (num2 <= 1){
    console.log(0.78 * num1)
} else if (num2 <= 2){
    console.log(0.39 * num1)
} else if (num2 <= 3){
    console.log(2.65 * num1)
} else if (num2 <= 4){
    console.log(1.17 * num1)
} else if (num2 <= 5){
    console.log(1.05 * num1)
} else if (num2 <= 6){
    console.log(1.23* num1);
}
