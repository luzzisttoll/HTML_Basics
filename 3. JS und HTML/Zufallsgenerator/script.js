function buttonClickedAdd(){
    console.log("clicked")
    let num1 = Math.ceil(document.getElementById("number1").value);
    let num2 = Math.floor(document.getElementById("number2").value)

    let random_result = Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
    document.getElementById("result").innerHTML = "Die Zufallszahl lautet " + random_result;
}

