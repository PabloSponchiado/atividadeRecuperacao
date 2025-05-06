/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno:Pablo Isaac Sponchiado da Silva
*/

const teclado = require(`prompt-sync`)();

let n1 = parseInt(teclado(`Digite o primeiro número: \n `));

let n2 = parseInt(teclado(`Digite o segundo número: \n `));

let n3 = parseInt(teclado(`Digite o terceiro número: \n `));

console.log(`Os números em ordem decrescente são: `);

if (n1 < n2 && n1 < n3) {
  
  if (n2 < n3) {
    console.log(`A ordem crescente é: ${n1}, ${n2}, ${n3}`);
  } else {
    console.log(`A ordem crescente é: ${n1}, ${n3}, ${n2}`);
  }
} else if (n2 < n1 && n2 < n3) {
  if (n1 < n3) {
    console.log(`A ordem crescente é: ${n2}, ${n1}, ${n3}`);
  } else {
    console.log(`A ordem crescente é: ${n2}, ${n3}, ${n1}`);
  }
} else if (n1 < n2) {
  console.log(`A ordem crescente é: ${n3}, ${n1}, ${n2}`);
} else {
  console.log(`A ordem crescente é: ${n3}, ${n2}, ${n1}`);
};
