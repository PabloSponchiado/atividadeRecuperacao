/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e
calcule a média de altura das pessoas maiores de idade.
Nome aluno:Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
var somaAltura = 0;
var cont = 0;
var totalPessoas = 0;
do {
    console.log("Pessoa ".concat(totalPessoas + 1, ":"));
    var altura = parseFloat(teclado("Digite sua altura (em metros): "));
    var idade = parseInt(teclado("Digite sua idade: "));
    if (idade >= 18) {
        somaAltura += altura;
        cont++;
    }
    totalPessoas++;
} while (totalPessoas < 10);
var mediaAltura;
if (cont > 0) {
    mediaAltura = somaAltura / cont;
}
else {
    mediaAltura = 0;
}
console.log("--- Resultados ---");
console.log("M\u00E9dia de altura das pessoas maiores de idade: ".concat(mediaAltura, " metros"));
console.log("Total de pessoas maiores de idade: ".concat(cont));
