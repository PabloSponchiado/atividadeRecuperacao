/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno:Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
var somaIdadeHomem = 0;
var somaIdadeMulher = 0;
var contHomem = 0;
var contMulher = 0;
var contador = 1;
while (contador <= 50) {
    console.log("Pessoa ".concat(contador, ":"));
    var idade = parseInt(teclado("Digite a idade: "));
    var sexo = teclado("Digite o sexo (M para masculino, F para feminino): ")();
    if (sexo === "M") {
        somaIdadeHomem += idade;
        contHomem++;
        contador++;
    }
    else if (sexo === "F") {
        somaIdadeMulher += idade;
        contMulher++;
        contador++;
    }
    else {
        console.log("Sexo inválido. Tente novamente.");
    }
}
var mediaIdadeHomem;
if (contHomem > 0) {
    mediaIdadeHomem = somaIdadeHomem / contHomem;
}
else {
    mediaIdadeHomem = 0;
}
var mediaIdadeMulher;
if (contMulher > 0) {
    mediaIdadeMulher = somaIdadeMulher / contMulher;
}
else {
    mediaIdadeMulher = 0;
}
console.log("--- Resultados ---");
console.log("M\u00E9dia de idade dos homens: ".concat(mediaIdadeHomem));
console.log("M\u00E9dia de idade das mulheres: ".concat(mediaIdadeMulher));
console.log("");
console.log("Total de homens: ".concat(contHomem));
console.log("Total de mulheres: ".concat(contMulher));
console.log("");
console.log("Total de pessoas: ".concat(contHomem + contMulher));
