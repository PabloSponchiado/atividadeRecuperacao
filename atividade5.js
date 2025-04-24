/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Pablo Isaac Sponchiado da Silva
*/
var teclado = require('prompt-sync')();
console.log("Bem-Vindo ao aplicativo que analisa e organiza as notas!");
var n1 = parseInt(teclado("Digite a primeira nota: "));
var n2 = parseInt(teclado("Digite a segunda nota: "));
var n3 = parseInt(teclado("Digite a terceira nota: "));
var n4 = parseInt(teclado("Digite a quarta nota: "));
var n5 = parseInt(teclado("Digite a quinta nota: "));
var maior = n1;
var menor = n1;
var soma = n1;
if (n2 > maior)
    maior = n2;
if (n2 < menor)
    menor = n2;
soma += n2;
if (n3 > maior)
    maior = n3;
if (n3 < menor)
    menor = n3;
soma += n3;
if (n4 > maior)
    maior = n4;
if (n4 < menor)
    menor = n4;
soma += n4;
if (n5 > maior)
    maior = n5;
if (n5 < menor)
    menor = n5;
soma += n5;
var media = soma / 5;
console.log("Maior nota: ".concat(maior));
console.log("Menor nota: ".concat(menor));
console.log("M\u00E9dia das notas: ".concat(media));
