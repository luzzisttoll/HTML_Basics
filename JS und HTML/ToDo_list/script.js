var jsonText = document.getElementById("content");
var data = [];
function addNote(){
    var value = {
        wert: document.getElementById("note")
    };
    data.push(value);
    jsonText.innerHTML = data;
}



