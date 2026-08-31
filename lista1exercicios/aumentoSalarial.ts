import salario from "readline-sync";

let salarioAtual: number = 0,
    percentualAumento: number = 12,
    valorAumento: number = 0,
    salarioFinal: number = 0;

console.log("Digite o valor do salário atual para calcular o aumento de 12%: ");
salarioAtual = salario.questionFloat("Digite o valor do salário atual: ");

valorAumento = (salarioAtual * percentualAumento) / 100;
salarioFinal = salarioAtual + valorAumento;

console.log(`O valor do aumento é: R$ ${valorAumento.toFixed(2)}`);
console.log(`O valor final do salário com aumento é: R$ ${salarioFinal.toFixed(2)}`);