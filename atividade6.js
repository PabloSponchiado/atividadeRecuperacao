/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
•	A quantidade de números pares digitados e quais foram eles;
•	A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite a primeira nota: "));
var n2 = parseInt(teclado("Digite a segunda nota: "));
var n3 = parseInt(teclado("Digite a terceira nota: "));
var n4 = parseInt(teclado("Digite a quarta nota: "));
var n5 = parseInt(teclado("Digite a quinta nota: "));
var n6 = parseInt(teclado("Digite a sexta nota: "));
var n7 = parseInt(teclado("Digite a sétima nota: "));
var n8 = parseInt(teclado("Digite a oitava nota: "));
var n9 = parseInt(teclado("Digite a nona nota: "));
var n10 = parseInt(teclado("Digite a décima nota: "));
var par = 0;
var impar = 0;
var pares = "";
var impares = "";
function Par(numero) {
    if (numero % 2 === 0) {
        par++;
        pares += numero + " ";
    }
    else {
        impar++;
        impares += numero + " ";
    }
}
Par(n1);
Par(n2);
Par(n3);
Par(n4);
Par(n5);
Par(n6);
Par(n7);
Par(n8);
Par(n9);
Par(n10);
console.log("Quantidade de n\u00FAmeros pares: ".concat(par));
console.log("N\u00FAmeros pares: ".concat(pares));
console.log("Quantidade de n\u00FAmeros \u00EDmpares: ".concat(impar));
console.log("N\u00FAmeros \u00EDmpares: ".concat(impares));
