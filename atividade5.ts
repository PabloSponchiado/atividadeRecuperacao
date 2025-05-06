/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Pablo Isaac Sponchiado da Silva
*/

const teclado = require('prompt-sync')();

console.log(`Bem-Vindo ao aplicativo que analisa e organiza as notas!`);

let n1: number = parseInt(teclado(`Digite a primeira nota: `));
let n2: number = parseInt(teclado(`Digite a segunda nota: `));
let n3: number = parseInt(teclado(`Digite a terceira nota: `));
let n4: number = parseInt(teclado(`Digite a quarta nota: `));
let n5: number = parseInt(teclado(`Digite a quinta nota: `));

let maior: number = n1;
let menor: number = n1;
let soma: number = n1;

if (n2 > maior) {maior = n2};
if (n2 < menor) {menor = n2};
soma += n2;

if (n3 > maior)  {maior = n3};
if (n3 < menor)  {menor = n3};
soma += n3;

if (n4 > maior) {maior = n4};
if (n4 < menor) {menor = n4};
soma += n4;

if (n5 > maior) {maior = n5};
if (n5 < menor) {menor = n5};
soma += n5;

let media: number = soma / 5;

console.log(`Maior nota: ${maior}`);
console.log(`Menor nota: ${menor}`);
console.log(`Média das notas: ${media}`);