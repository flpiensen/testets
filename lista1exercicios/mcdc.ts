import mcdc from "readline-sync";

let numero: number = 0,
    milhar: number = 0,
    centena: number = 0,
    dezena: number = 0,
    unidade: number = 0,
    resto: number = 0;

console.log("Digite um número de 0 a 9999 para separar em milhar, centena, dezena e unidade: ");
numero = mcdc.questionInt("Digite o número: ");

milhar = Math.trunc(numero / 1000);
resto = numero % 1000;

centena = Math.trunc(resto / 100);
resto = resto % 100;

dezena = Math.trunc(resto / 10);
unidade = resto % 10;

console.log(`O número ${numero} é composto por: ${milhar} milhar, ${centena} centena, ${dezena} dezena e ${unidade} unidade.`);