let todos = [
    { id: 1, title: "putzen", isDone: false },
    { id: 2, title: "kochen", isDone: true },
    { id: 3, title: "einkaufen", isDone: false },
    { id: 4, title: "lernen", isDone: false },
]

let maxID = 4;

printTask();

document.getElementById("note").addEventListener("change", function (event) {
    console.log(event.target.value);
    maxID++
    todos.push({ id: maxID, title: event.target.value, isDone: false })
    printTask();
    event.target.value = "";
})

function printTask() {
    let html = "";
    todos.forEach(element => {
        let style = element.isDone?"green":"none";
        html += "<div class='task' style='background-color:" + style + "'>" + element.title + " - " + element.isDone + "<div onClick='setIsDone(" + element.id + ")'>Done</div><div  onClick='deleteTask(" + element.id + ")'>Delete</div></div>"
    });
    document.getElementById("content").innerHTML = html;
}

function setIsDone(id) {
    let todo = todos.find(element => {
        if (element.id == id) {
            return true;
        }
    })
    todo.isDone = !todo.isDone;
    printTask();
}

function deleteTask(id){
    let index = todos.findIndex(element => {
        if (element.id == id) {
            return true;
        }
    })
    todos.splice(index ,1);
    printTask();
}
