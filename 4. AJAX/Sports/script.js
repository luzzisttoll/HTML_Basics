url = "";
// document.getElementById("searchbar").addEventListener("change", function (event) {
//     console.log('https://api.api-ninjas.com/v1/cryptoprice?symbol=' + event.target.value)
// })

function registerEvents() {
    document.getElementById("search").addEventListener("change", function (event) {
        url = 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + event.target.value;
        console.log(url);
        loadSports();
    })
}


function loadSports() {
    fetch(url, {
        method: "GET",
        headers: {
            "X-API-KEY": "0OYDidzDI/O9S2U8efeDSA==vfqX55xOhxT87DFp"
        }
    })
        .then(response => response.json())
        .then(function (data) {
            let html = "";
            if (data.length === 0) {
                html = "<li> Sorry, no results found.</li>";
            } else {
                data.forEach(Element => {
                    html += "<li> Name: " + Element.name + "<br>Calories burned per hour: " + Element.calories_per_hour + "</li>";
                });
            }
            document.getElementById("sports").innerHTML = html;
        })
        .catch(function (err) {
            let html = "<li>Oops, something went wrong. Please try again later.</li>";
            document.getElementById("sports").innerHTML = html;
            console.log(err);
        })
}

registerEvents();