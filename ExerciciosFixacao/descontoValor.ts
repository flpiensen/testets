import desconto from "readline-sync";

let valorProduto: number = 0,
    percentualDesconto: number = 35,
    valorDesconto: number = 0,
    valorFinal: number = 0;

console.log("Digite o valor do produto para calcular o desconto de 35%: ");
valorProduto = desconto.questionFloat("Digite o valor do produto: ");

valorDesconto = (valorProduto * percentualDesconto) / 100;
valorFinal = valorProduto - valorDesconto;

console.log(`O valor do desconto é: R$ ${valorDesconto.toFixed(2)}`); // Exibe o valor do desconto com duas casas decimais
console.log(`O valor final do produto com desconto é: R$ ${valorFinal.toFixed(2)}`);