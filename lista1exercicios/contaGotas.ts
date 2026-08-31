import GOTAS from "readline-sync";

let quantidadeMililitros: number = 0,
    gota: number = 0.05,
    quantidadeGotas: number = 0

console.log("Digite a quantidade de mililitros que deseja converter em gotas: ");
quantidadeMililitros = GOTAS.questionFloat("Quantidade em mililitros: ");

quantidadeGotas = quantidadeMililitros / gota;

console.log(`A quantidade de gotas em ${quantidadeMililitros} ml é: ${quantidadeGotas} gotas.`);