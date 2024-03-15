import inquirer from "inquirer";   
import chalk from "chalk";
import { log } from "console";

let weight = await inquirer.prompt({
    name : "WeightInKG",
    type : "number",
    message : "Enter Your Weight in KG!"
})
let height = await inquirer.prompt({
    name : "HeightInMeter",
    type : "number",
    message : "Enter your Hieght in Meters"
})
let BMI = weight.WeightInKG / (height.HeightInMeter * height.HeightInMeter);
console.log(chalk.red.bold.bgWhite(BMI.toFixed(2)));
//According to Science:  A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9. BMI applies to most adults 18-65 years.
// using if else condition to make more attractive.

if (BMI >= 25){
    console.log(chalk.red.bold.italic.bgWhite("You are Overweight."))
}else if(BMI >= 18.5){
    console.log(chalk.bgWhite.green.bold.italic("You are healthy."))
}else{
    console.log(chalk.bgWhite.yellow.bold.italic("Yoi are weak."))
}
