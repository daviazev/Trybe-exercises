        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()

 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

 Crie uma função que mude a cor do quadrado vermelho para branco.

 Crie uma função que corrija o texto da tag <h1>.

 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */



function changesP() {
    let p = document.getElementsByTagName("p");
    p[1].innerText = "Em dois anos, quero ser dev junior e estar em nivel avançado de inglês, e me preparando para vagas fora do Brasil";
    return p;
} 

function changesYellowBox() {
    let yellowBox = document.getElementsByClassName("main-content");
    yellowBox[0].style.backgroundColor = "rgb(76,164,109)"
    return yellowBox;
}

function chagesRedBox() {
    let redBox = document.getElementsByClassName("center-content");
    redBox[0].style.backgroundColor = "#ffffff";
    return redBox;
}

function changesH1(newH1) {
    return document.getElementsByTagName("h1")[0].innerText = newH1;
}

function changesPToUpperCase() {
    let p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
        p[i].style.textTransform = "uppercase"
    }
}

function showAllP () {
    return console.log(document.getElementsByTagName("p")); 
}

function showAllFunctions() {
        changesP(),
        changesYellowBox(),
        chagesRedBox(),
        changesH1("Exercício 5.1 - Javascriptonita"),
        changesPToUpperCase(),
        showAllP()
}

showAllFunctions() 

//Por que eu fiz assim? Porque eu quis. 
//Eu tenho o DOM. 
