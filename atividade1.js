/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync");
var x = parseInt(teclado("Digite um n\u00FAmero: \n "));
var z = 0;
var y = parseInt(teclado("Digite um n\u00FAmero: \n"));
console.log("x = ".concat(x, " \n"));
console.log("y = ".concat(y, " \n"));
x = z;
z = y;
x = z;
