import teclado from "npm:readline-sync";

let a: number = 0,
  b: number = 0,
  soma: number = 0;

console.log("Digite o primeiro número:");
a = teclado.questionInt();

console.log("Digite o segundo número:");
b = teclado.questionInt();

soma = a + b;

console.log();
console.log("A soma é:");
console.log(soma);