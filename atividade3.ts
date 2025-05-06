/*10 pontos
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno: Pablo Isaac Sponchiado da Silva
*/
const teclado = require(`prompt-sync`)();

let valor = parseInt(teclado(`Digite o valor `));

if (valor >= 10 && 20) {
    console.log(`O valor está entre 10 e 20`)
}
else if (valor >= 21 && valor <= 30) {
    console.log(`O valor está entre 21 e 30`)
}
else if (valor >= 31 && valor <= 40) {
    console.log(`O valor está entre 31 e 40`)
}
else if (valor >= 41 && valor <= 50) {
    console.log(`O valor está entre 41 e 50`)
}
else if (valor >= 51 && valor <= 60) {
    console.log(`O valor está entre 51 e 60`)
}
else if (valor >= 61 && valor <= 70) {
    console.log(`O valor está entre 61 e 70`)
}
else if (valor >= 71 && valor <= 80) {
    console.log(`O valor está entre 71 e 80`)
}
else if (valor >= 81 && valor <= 90) {
    console.log(`O valor está entre 81 e 90`)
}
else if (valor >= 91 && valor <= 100) {
    console.log(`O valor está entre 91 e 100`)
};