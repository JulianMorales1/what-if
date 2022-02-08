const prompt = require('prompt-sync')();

let num1 = Number(prompt('Enter your age: '));

if (num1 < 16){
    console.log("You can't drive")
} else if (num1 >= 16 && num1 <= 17){
    console.log("You can Drive but not Vote")
} else if (num1 >= 18 && num1 <= 24){
    console.log("You can Vote but not Rent a Car")
} else if (num1 >= 25){
    console.log("You can do Pretty much anything")
}
