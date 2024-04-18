#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("wellcome to ZainDarbari - cli Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your Guess Number(Number limit from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation ! You guess a correct number.");
}
else {
    console.log("Sorry, you guess a wrong number");
}
