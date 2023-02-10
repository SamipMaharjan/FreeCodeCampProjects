let first_number = 0;
let second_number = 0;
let output = 0;
let operation = prompt("Enter your desired operation:");

      if (operation === "add") {
        output = first_number + second_number;
      } else if (operation === "subtract") {
        output = first_number - second_number;
      } else if (operation === "multiply") {
        output = first_number * second_number;
      } else if (operation === "divide") {
        output = first_number / second_number;
      }

      document.getElementById("output").innerHTML = "The result is: " + output;
 