// EXERCICIO AINDA NÃO FINALIZADO 

let salario_bruto = 1500;
let aliquota;

if (salario_bruto <= 1556.94) {
    aliquota = 8/100 * salario_bruto
} else if (salario_bruto >= 1556.95 && salario_bruto <= 2594.92) {
    aliquota = 9/100 * salario_bruto
} else if (salario_bruto >= 2594.93 && salario_bruto <= 6189.82) {
    aliquota = 11/100 * salario_bruto
} else {
    aliquota = 570.88
}

console.log(aliquota)

// EXERCICIO AINDA NÃO FINALIZADO
