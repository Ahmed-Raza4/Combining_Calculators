import inquirer from "inquirer";   
import chalk from "chalk";

let devide = await inquirer.prompt({
    name: "Dev1",
    type: "number",
    message: "Enter First Number for Devide"
})
let devide2 = await inquirer.prompt({
    name: "Dev2",
    type: "number",
    message: "Enter Second Number for Devide"
})
let total : number = devide.Dev1 / devide2.Dev2
console.log(chalk.bgWhite.redBright.bold(total));
