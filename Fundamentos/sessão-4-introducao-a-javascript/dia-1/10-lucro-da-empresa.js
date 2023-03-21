const a =  5;
const b = 10; 
let imposto = 20/100 * a
let valorCustoTotal = a + imposto
let c = b - valorCustoTotal;

if (a < 0 || b < 0) {
    console.log("Erro.")
} else {
    console.log(`Valor de custo: R$${valorCustoTotal},00 \nValor de venda: R$${b},00\nLucro ao vender 1000 unidades: R$${c * 1000},00`)
}
