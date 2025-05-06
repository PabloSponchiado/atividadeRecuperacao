/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Pablo Isaac Sponchiado da Silva
*/

const teclado = require (`prompt-sync`)();

let x = parseInt(teclado(`Digite um número: \n `)); 
let z : number = 0
let y = parseInt(teclado(`Digite um número: \n`));

console.log(`x = ${x} \n`); 
console.log(`y = ${y} \n`); 

x = z
z = y 
x = z

console.log(`Os números trocados são ${x} e ${y}`);

