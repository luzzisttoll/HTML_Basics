let data= [
    {firstName:"Hans", lastName:"Huber", points:30},
    {firstName:"Paul", lastName:"Müööer", points:34},
    {firstName:"Franz", lastName:"Maier", points:35},
];

 
for (let index = 0; index < data.length; index++){
    const element = data[index];
    console.log(element.firstName)
}

data.forEach(element => {
    console.log(element.firstName)
})

function loadPeople(){
    let html = "";
    data.forEach(element => {
        html += "<div>" + element.firstName + " " + element.lastName + "</div>"
    });
    document.getElementById("content").innerHTML = html;
    console.log(html);
}

loadPeople();