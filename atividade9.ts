/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno: Pablo Isaac Sponchiado da Silva
*/

const teclado = require(`prompt-sync`)();

let n1: number = parseInt(teclado("Digite o primeiro número: "));
let n2: number = parseInt(teclado("Digite o segundo número: "));

if (n1 > n2) {
  console.log("O primeiro número deve ser menor que o segundo.");
} else {
  console.log(`Números ímpares entre ${n1} e ${n2}:`);
  
  let nAtual = n1; 
  while (nAtual <= n2) {
    if (nAtual % 2 !== 0) {
      console.log(`${nAtual}`); 
    }
    nAtual++; 
  }
};