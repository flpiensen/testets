import quadrado from "readline-sync";

let numero: number = 0,
    resultado: number = 0;

console.log("Digite um número para calcular o seu quadrado: ");
numero = quadrado.questionFloat("Digite o número: ");

resultado = numero * numero;

console.log(`O quadrado de ${numero} é: ${resultado}`);