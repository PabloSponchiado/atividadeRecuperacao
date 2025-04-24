/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:Pablo Isaac Sponchiado
*/
var teclado = require("prompt-sync")();
var soma = 0;
var opcao = 0;
console.clear();
do {
    console.log("---------------------------");
    console.log("--- Calculadora de Soma ---");
    console.log("---------------------------");
    console.log("-- 1 - Adicionar n\u00FAmero ---");
    console.log("-- 2 - Sair ---------------");
    console.log("---------------------------");
    opcao = parseInt(teclado("Digite a opção desejada: "));
    if (opcao === 1) {
        var numero = parseFloat(teclado("Digite um número: "));
        soma += numero;
        console.log("Soma atual: ".concat(soma));
    }
    else if (opcao !== 2) {
        console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== 2 && soma <= 100);
if (soma > 100) {
    console.log("A soma excedeu o limite de 100.");
}
else {
    console.log("Programa encerrado.");
}
;
