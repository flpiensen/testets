import valores from "readline-sync";

let valor1: number = 0,
    valor2: number = 0,
    aux: number = 0;

console.log("Digite dois valores para realizar a troca de valores: ");
valor1 = valores.questionFloat("Digite o primeiro valor: ");
valor2 = valores.questionFloat("Digite o segundo valor: ");

aux = valor1;
valor1 = valor2;
valor2 = aux;

console.log(`Após a troca, o primeiro valor é: ${valor1} e o segundo valor é: ${valor2}`);