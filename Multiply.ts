import inquirer from "inquirer";
import chalk from "chalk";

let input01 = await inquirer.prompt({
    name: "input1",
    type: "number",
    message: "Write your first Number!"
})

let input02 = await inquirer.prompt({
    name: "input2",
    type: "number",
    message: "write your second Number.!"
})
let totalNumber: number = (input01.input1) * (input02.input2);
console.log(chalk.bgBlueBright.yellowBright(totalNumber));
