/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno:Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: \n "));
var n2 = parseInt(teclado("Digite o segundo n\u00FAmero: \n "));
var n3 = parseInt(teclado("Digite o terceiro n\u00FAmero: \n "));
console.log("Os n\u00FAmeros em ordem decrescente s\u00E3o: \n");
if (n1 < n2 && n1 < n3) {
    if (n2 < n3) {
        console.log("A ordem crescente \u00E9: ".concat(n1, ", ").concat(n2, ", ").concat(n3));
    }
    else {
        console.log("A ordem crescente \u00E9: ".concat(n1, ", ").concat(n3, ", ").concat(n2));
    }
}
else if (n2 < n1 && n2 < n3) {
    if (n1 < n3) {
        console.log("A ordem crescente \u00E9: ".concat(n2, ", ").concat(n1, ", ").concat(n3));
    }
    else {
        console.log("A ordem crescente \u00E9: ".concat(n2, ", ").concat(n3, ", ").concat(n1));
    }
}
else if (n1 < n2) {
    console.log("A ordem crescente \u00E9: ".concat(n3, ", ").concat(n1, ", ").concat(n2));
}
else {
    console.log("A ordem crescente \u00E9: ".concat(n3, ", ").concat(n2, ", ").concat(n1));
}
