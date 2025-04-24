/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:Pablo Isaac Sponchiado
*/

const teclado = require(`prompt-sync`)();

let soma = 0;
let opcao = 0;
console.clear();

do {
  console.log(`---------------------------`)  
  console.log(`--- Calculadora de Soma ---`);
  console.log(`---------------------------`)  
  console.log(`-- 1 - Adicionar número ---`);
  console.log(`-- 2 - Sair ---------------`);
  console.log(`---------------------------`) 
  
  opcao = parseInt(teclado("Digite a opção desejada: "));

  if (opcao === 1) {
    
    const numero = parseFloat(teclado("Digite um número: "));
    soma += numero;
    console.log(`Soma atual: ${soma}`);
  } else if (opcao !== 2) {
    console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== 2 && soma <= 100);


if (soma > 100) {
  console.log("A soma excedeu o limite de 100.");
} else {
  console.log("Programa encerrado.");
};