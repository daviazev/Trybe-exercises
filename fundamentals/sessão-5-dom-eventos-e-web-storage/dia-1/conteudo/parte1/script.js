let h2 = document.querySelector("h2");
h2.innerHTML = "<h1>Interestelar</h1>";

let p = document.querySelectorAll(".paragrafo")

for (let i = 0; i < p.length; i+=1) {
    if(i == 0) {
        p[i].innerText = "Este parágrafo foi alterado pelo javascript. Eu tenho o DOM 😮";
        p[i].style.color = "blue"
    } else {
        p[i].innerText = "Uau, eu fiz de novo! 🤔"
    }
}

let subtitle = document.querySelector("#subtitle");
subtitle.innerHTML = "<h2>Veja o que eu fiz com o parágrafo abaixo</h2>";

document.querySelectorAll("h4")[0].innerHTML = "<h4>Subtítulo recuperado 😁</h4>";
