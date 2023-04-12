function buttonClickedAdd(){
    console.log("clicked")
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "Das Ergebnis der Addition lautet " + result;
}

function buttonClickedSubtract(){
    console.log("clicked")
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = "Das Ergebnis der Subtraktion lautet " + result;
}

function buttonClickedMultiply(){
    console.log("clicked")
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = "Das Ergebnis der Mulitplikation lautet " + result;
}

function buttonClickedDivide(){
    console.log("clicked")
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML = "Das Ergebnis der Division lautet " + result;
}