let data= [
    {firstname:"Hans", lastName:"Huber", points:30},
    {firstname:"Paul", lastName:"Müööer", points:34},
    {firstname:"Franz", lastName:"Maier", points:35},
]


function loadPeople(){
    let html ="";
    
    data.forEach(element => {
        html += "<div>" + element.firstname + " " + element.lastName + "</div>" 
    });

    document.getElementById("content").innerHTML=html;
}

loadPeople();