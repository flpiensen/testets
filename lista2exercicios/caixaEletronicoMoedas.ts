import caixaEletronicoMoedas from "readline-sync";

let saqueValor: number = 0,
    quantidadeNotas100: number = 0,
    quantidadeNotas50: number = 0,
    quantidadeNotas20: number = 0,
    quantidadeNotas10: number = 0,
    quantidadeNotas5: number = 0,
    quantidadeNotas2: number = 0,
    quantidadeMoedas1: number = 0,
    quantidadeMoedas50Centavos: number = 0,
    quantidadeMoedas25Centavos: number = 0,
    quantidadeMoedas10Centavos: number = 0,
    quantidadeMoedas5Centavos: number = 0,
    quantidadeMoedas1Centavo: number = 0,
    resto: number = 0;

console.log("Digite o valor do saque para calcular a quantidade de notas e moedas: ");
saqueValor = caixaEletronicoMoedas.questionFloat("Digite o valor do saque: ");

quantidadeNotas100 = Math.trunc(saqueValor / 100);
resto = saqueValor % 100;

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

quantidadeMoedas1 = Math.trunc(resto / 1);
resto = resto % 1;

quantidadeMoedas50Centavos = Math.trunc(resto / 0.5);
resto = resto % 0.5;

quantidadeMoedas25Centavos = Math.trunc(resto / 0.25);
resto = resto % 0.25;

quantidadeMoedas10Centavos = Math.trunc(resto / 0.1);
resto = resto % 0.1;

quantidadeMoedas5Centavos = Math.trunc(resto / 0.05);
resto = resto % 0.05;

quantidadeMoedas1Centavo = Math.trunc(resto / 0.01);

console.log(`A quantidade de notas e moedas necessária para o saque de R$${saqueValor.toFixed(2)} é:`);
console.log(`Notas de R$100: ${quantidadeNotas100}`);
console.log(`Notas de R$50: ${quantidadeNotas50}`);
console.log(`Notas de R$20: ${quantidadeNotas20}`);
console.log(`Notas de R$10: ${quantidadeNotas10}`);
console.log(`Notas de R$5: ${quantidadeNotas5}`);
console.log(`Notas de R$2: ${quantidadeNotas2}`);
console.log(`Moedas de R$1: ${quantidadeMoedas1}`);
console.log(`Moedas de R$0,50: ${quantidadeMoedas50Centavos}`);
console.log(`Moedas de R$0,25: ${quantidadeMoedas25Centavos}`);
console.log(`Moedas de R$0,10: ${quantidadeMoedas10Centavos}`);
console.log(`Moedas de R$0,05: ${quantidadeMoedas5Centavos}`);
console.log(`Moedas de R$0,01: ${quantidadeMoedas1Centavo}`);