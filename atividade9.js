/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno: Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o primeiro número: "));
var n2 = parseInt(teclado("Digite o segundo número: "));
if (n1 > n2) {
    console.log("O primeiro número deve ser menor que o segundo.");
}
else {
    console.log("N\u00FAmeros \u00EDmpares entre ".concat(n1, " e ").concat(n2, ":"));
    var nAtual = n1;
    while (nAtual <= n2) {
        if (nAtual % 2 !== 0) {
            console.log("".concat(nAtual));
        }
        nAtual++;
    }
}
;
