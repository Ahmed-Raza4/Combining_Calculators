import inquirer from "inquirer";
import chalk from "chalk";
let input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "kindly provide First Number."
});
let input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "kinldy provide second Number."
});
let total = input1.num1 - input2.num2;
console.log(chalk.bgBlackBright.white(total));
