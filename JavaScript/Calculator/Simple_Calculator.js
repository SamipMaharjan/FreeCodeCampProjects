
let first_number = parseFloat(document.getElementById("first_number").value);

fucntion Calculate{
document.getElementById("output").innerHTML = "The result is " + first_number;  
}

let second_number = parseFloat(document.getElementById("second_number").value);
let operation = document.getElementById("operation").value;
let output = 0;
// switch (operation){
//     case '+':
//         output = first_number + second_number;
//         console.log(output+" is the sum of your numbers.")
//         break;

//     case '-':
//         output = first_number - second_number;
//         console.log(output+" is the difference of your numbers.")
//         break;

//     case '*':
//         output = first_number * second_number;
//         console.log(output+" is the product of your numbers.")
//         break;

//     case '/':
//         output = first_number / second_number;
//         console.log(output+" is the division of your numbers.")
//         break;

//     default:
//         console.log("Wrong input.");
// }
document.getElementById("output").innerHTML = "The result is " + output;  