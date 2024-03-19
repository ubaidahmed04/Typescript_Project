#! /usr/bin/env node 
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter your first Number",
    type: "number",
    name: "FirstNum",
  },
  { message: "Enter your second Number", 
  type: "number",
   name: "SecondNum"
  },
  {
    message: "Enter your  Number",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    name: "operator",
  },
]);
if(answer.operator ==="Addition"){
    console.log(answer.FirstNum +answer.SecondNum)
}
else if(answer.operator ==="Subtraction"){
    console.log(answer.FirstNum - answer.SecondNum)
}
else if(answer.operator ==="Mulitiplication"){
    console.log(answer.FirstNum * answer.SecondNum)
}
else if(answer.operator ==="Division"){
    console.log(answer.FirstNum / answer.SecondNum)
}