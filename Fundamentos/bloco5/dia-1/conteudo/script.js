let h2 = document.getElementById("page-title");
h2.innerHTML = "<h1>Interestelar</h1>";

let p = document.getElementsByClassName("paragrafo")

for (let i = 0; i < p.length; i+=1) {
    if(i == 0) {
        p[i].innerText = "Este parágrafo foi alterado pelo javascript. Eu tenho o DOM 😮";
        p[i].style.color = "blue"
    } else {
        p[i].innerText = "Uau, eu fiz de novo! 🤔"
    }
}

let subtitle = document.getElementById("subtitle");
subtitle.innerHTML = "<h2>Veja o que eu fiz com o parágrafo abaixo</h2>";

document.getElementsByTagName("h4")[0].innerHTML = "<h4>Subtítulo recuperado 😁</h4>";