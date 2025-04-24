/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
•	A quantidade de números pares digitados e quais foram eles;
•	A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Pablo Isaac Sponchiado da Silva
*/

const teclado = require(`prompt-sync`)();

let n1: number = parseInt(teclado("Digite a primeira nota: "));
let n2: number = parseInt(teclado("Digite a segunda nota: "));
let n3: number = parseInt(teclado("Digite a terceira nota: "));
let n4: number = parseInt(teclado("Digite a quarta nota: "));
let n5: number = parseInt(teclado("Digite a quinta nota: "));
let n6: number = parseInt(teclado("Digite a sexta nota: "));
let n7: number = parseInt(teclado("Digite a sétima nota: "));
let n8: number = parseInt(teclado("Digite a oitava nota: "));
let n9: number = parseInt(teclado("Digite a nona nota: "));
let n10: number = parseInt(teclado("Digite a décima nota: "));

let par: number = 0;
let impar: number = 0;

let pares: string = ""; 
let impares: string = ""; 

function Par(numero: number) {
    if (numero % 2 === 0) {
        par++;
        pares += numero + " "; 
    } else {
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

console.log(`Quantidade de números pares: ${par}`);
console.log(`Números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impar}`);
console.log(`Números ímpares: ${impares}`);