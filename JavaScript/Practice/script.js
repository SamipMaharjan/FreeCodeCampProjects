function display(){
    let first_number = parseFloat(document.getElementById("first_number").value);
    let second_number = parseFloat(document.getElementById("second_number").value);

    document.getElementById("output").innerHTML = "The result is: " + first_number;
}