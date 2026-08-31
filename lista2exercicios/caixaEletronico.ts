import caixaEletronico from "readline-sync";

let valorSaque: number = 0,
    quantidadeNotas100: number = 0,
    quantidadeNotas50: number = 0,
    quantidadeNotas20: number = 0,
    quantidadeNotas10: number = 0,
    quantidadeNotas5: number = 0,
    quantidadeNotas2: number = 0,
    quantidadeMoedas1: number = 0,
    resto: number = 0;

console.log("Digite o valor do saque para calcular a quantidade de notas e moedas: ");
valorSaque = caixaEletronico.questionInt("Digite o valor do saque: ");

quantidadeNotas100 = Math.trunc(valorSaque / 100);
resto = valorSaque % 100;

quantidadeNotas50 = Math.trunc(resto / 50);
resto = resto % 50;

quantidadeNotas20 = Math.trunc(resto / 20);
resto = resto % 20;

quantidadeNotas10 = Math.trunc(resto / 10);
resto = resto % 10;

quantidadeNotas5 = Math.trunc(resto / 5);
resto = resto % 5;

quantidadeNotas2 = Math.trunc(resto / 2);
resto = resto % 2;

quantidadeMoedas1 = resto;

console.log(`A quantidade de notas e moedas necessária para o saque de R$${valorSaque} é:`);
console.log(`Notas de R$100: ${quantidadeNotas100}`);
console.log(`Notas de R$50: ${quantidadeNotas50}`);
console.log(`Notas de R$20: ${quantidadeNotas20}`);
console.log(`Notas de R$10: ${quantidadeNotas10}`);
console.log(`Notas de R$5: ${quantidadeNotas5}`);
console.log(`Notas de R$2: ${quantidadeNotas2}`);
console.log(`Moedas de R$1: ${quantidadeMoedas1}`);