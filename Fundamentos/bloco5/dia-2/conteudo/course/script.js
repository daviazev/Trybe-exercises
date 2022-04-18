document.getElementById("elementoOndeVoceEsta");

let color = document.getElementById("elementoOndeVoceEsta").parentNode;
color.style.color = "blue";

let text = document.getElementById("primeiroFilhoDoFilho");
text.innerText = "Adicionando texto ao filho do filho";

document.getElementById("pai").firstElementChild;

document.getElementById("elementoOndeVoceEsta").previousElementSibling

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

document.getElementById('elementoOndeVoceEsta').nextElementSibling

document.getElementById("pai").children[2]

let pai = document.getElementById("pai");

for(let i = 6; i > 1; i--) {
    let novoIrmão = document.createElement("section");
    novoIrmão.innerHTML = `<h${i}>Isso foi criado pelo JS</h${i}>`;
    pai.appendChild(novoIrmão);
}

let elementOndeVcTa = document.getElementById("elementoOndeVoceEsta");
let novoFilho = document.createElement("div");
novoFilho.innerText = "Isso tbm foi criado pelo javascript";
elementOndeVcTa.appendChild(novoFilho)

let filhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
let novoFilhoDoFilho = document.createElement("p");
novoFilhoDoFilho.innerText = "Isso é um parágrafo criado com linhas de código. UAU";
filhoDoFilho.appendChild(novoFilhoDoFilho)

let tioAvo =  document.getElementById("primeiroFilhoDoFilho").firstElementChild
console.log(tioAvo.parentElement.parentElement.nextElementSibling);
