/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
•	À vista: aplicar um desconto de 15% sobre o valor do carro.
•	Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno:Pablo Isaac Sponchiado da Silva
*/

const teclado = require('prompt-sync')();

const civic = 50000;
const kicks = 60000;
const up = 70000;
const fordka = 80000;

let descontoavista = 0.15;
let acrescimo = 1.13;
let vcarros = 0;

console.log("----------------------------------------------");
console.log("Escolha um dos modelos de carro:--------------");
console.log("1 - Honda Civic: R$ 50.000,00-----------------");
console.log("2 - Nissan Kicks: R$ 60.000,00----------------");
console.log("3 - Volkswagen Up: R$ 70.000,00---------------");
console.log("4 - Ford Ka: R$ 80.000,00---------------------");
console.log("----------------------------------------------");

let opcao: number = parseInt(teclado("Digite o número do modelo desejado: "));

if (opcao == 1) {
    vcarros = civic;
} else if (opcao == 2) {
    vcarros = kicks;
} else if (opcao == 3) {
    vcarros = up;
} else if (opcao == 4) {
    vcarros = fordka;
} else {
    console.log("Opção inválida. Tente novamente.");
}

if (vcarros > 0) 
    console.log("----------------------------------------------");
    console.log("Escolha a forma de pagamento:-----------------");
    console.log("1 - À vista-----------------------------------");
    console.log("2 - Parcelado---------------------------------");
    console.log("----------------------------------------------");

    let formaPagamento: number = parseInt(teclado("Digite o número da forma de pagamento desejada: "));

    if (formaPagamento == 1) {
        vcarros = vcarros - (vcarros * descontoavista);
        console.log(`O valor do carro com desconto é: R$ ${vcarros}`);
    } else if (formaPagamento == 2) {
        vcarros = vcarros * acrescimo;
        console.log(`O valor do carro parcelado é: R$ ${vcarros}`);
    } else {
        console.log("Opção inválida. Tente novamente.");
    }