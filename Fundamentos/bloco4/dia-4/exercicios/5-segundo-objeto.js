let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Pato Christmas on Bear Mountain, Dell s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let i in info) {
    if (info[i] !== info2[i]) {
        console.log(`${info[i]} e ${info2[i]}`)  
    } else {
        console.log("Ambos recorrentes")
    }
}