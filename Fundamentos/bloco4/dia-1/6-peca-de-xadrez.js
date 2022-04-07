let nomePeca = "BISHOP";
let result = nomePeca.toLowerCase();

switch (result){
    case "horse":
        console.log("movimento em L")
        break
    case "bishop":
        console.log("Movimento em diagonais")
        break
    default:
        console.log("Peça inválida!")
}