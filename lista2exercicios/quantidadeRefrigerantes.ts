import refrigerante from "readline-sync";

let quantidadePessoas: number = 0,
    quantidadeRefrigerantes: number = 0,
    mediaRefrigerantePessoa: number = 0.300,
    quantidadeGarrafaRefri: number = 2,
    quantidadeGarrafasComporar: number = 0;

console.log("Digite a quantidade de pessoas para calcular a quantidade de refrigerantes: ");
quantidadePessoas = refrigerante.questionInt("Digite a quantidade de pessoas: ");

quantidadeRefrigerantes = quantidadePessoas * mediaRefrigerantePessoa;

quantidadeGarrafasComporar = Math.ceil(quantidadeRefrigerantes / quantidadeGarrafaRefri);

console.log(`A quantidade de refrigerantes necessária para ${quantidadePessoas} pessoas é: ${quantidadeRefrigerantes.toFixed(2)} litros`);
console.log(`A quantidade de garrafas de refrigerante necessária para ${quantidadePessoas} pessoas é: ${quantidadeGarrafasComporar} garrafas`);