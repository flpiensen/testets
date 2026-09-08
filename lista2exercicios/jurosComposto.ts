import jurosComposto from "readline-sync";

let valor: number = 0,
    juros = 0,
    quantidadeMeses: number = 0,
    montante: number = 0;

valor = jurosComposto.questionFloat("Digite um valor que você deseja calcular investir: ");
juros = jurosComposto.questionFloat("Defina os juros ao mês: ");
quantidadeMeses = jurosComposto.questionInt("Defina a quantidade de meses: ");


montante = Math.pow((valor*(1+(juros/100))), quantidadeMeses);

console.log(`O valor obtido ao final do ultimo mês é de R$${montante.toFixed(2)}`);