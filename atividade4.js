/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno:Pablo Isaac Sponchiado Da Silva
*/
var teclado = require("prompt-sync")();
var soma = 0;
var quantidade = 0;
var opcao;
do {
    console.log("--------------------------------");
    console.log("--- Calculadora de M\u00E9dia -------");
    console.log("--- 1 - Adicionar n\u00FAmero--------");
    console.log("--- 2 - Calcular m\u00E9dia e sair---");
    console.log("--------------------------------");
    opcao = parseInt(teclado("Digite a opção desejada: "));
    console.clear();
    if (opcao === 1) {
        var numero = parseFloat(teclado("Digite um número: "));
        soma += numero;
        quantidade++;
    }
    else if (opcao != 2) {
        console.log("Opção inválida. Tente novamente.");
    }
} while (opcao != 2);
if (quantidade > 0) {
    var media = soma / quantidade;
    console.log("M\u00E9dia dos n\u00FAmeros digitados: ".concat(media));
}
else {
    console.log("Nenhum número foi digitado. Não é possível calcular a média.");
}
