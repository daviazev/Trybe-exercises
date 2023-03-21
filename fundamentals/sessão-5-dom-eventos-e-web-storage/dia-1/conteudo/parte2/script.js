let header = document.getElementById("header-container");
header.style.backgroundColor = "#00b069";
header.style.color = "#ffffff";

let query = document.querySelector(".emergency-tasks");
query.style.backgroundColor = "#ff9f84";

let query2 = document.querySelector(".no-emergency-tasks");
query2.style.backgroundColor = "#F9DB5D";

let h3 = document.querySelectorAll("h3");

for (i = 0; i < h3.length; i++) {
    if (i == 0 || i == 1) {
        h3[i].style.backgroundColor = "#a500f3";
        h3[i].style.color = "#ffffff";
    } else if (i == 2 || i == 3) {
        h3[i].style.backgroundColor = "#000000";
        h3[i].style.color = "#ffffff";
    }
}

let footer = document.getElementById("footer-container")
footer.style.backgroundColor = "#003533"
footer.style.color = "#ffffff"
