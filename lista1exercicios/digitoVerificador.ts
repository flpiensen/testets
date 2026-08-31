import digito from "readline-sync";

let numero: number = 0,
    primeiroDigito: number = 0,
    segundoDigito: number = 0,
    terceiroDigito: number = 0,
    quartoDigito: number = 0,
    quintoDigito: number = 0,
    sextoDigito: number = 0,
    resto: number = 0,
    soma: number = 0,
    digitoVerificador: number = 0;

console.log("Digite um número de 6 dígitos para calcular o dígito verificador: ");
numero = digito.questionInt("Digite o número: ");

primeiroDigito = Math.trunc(numero / 100000);
resto = numero % 100000;

segundoDigito = Math.trunc(resto / 10000);
resto = resto % 10000;

terceiroDigito = Math.trunc(resto / 1000);
resto = resto % 1000;

quartoDigito = Math.trunc(resto / 100);
resto = resto % 100;

quintoDigito = Math.trunc(resto / 10);

sextoDigito = resto % 10;

primeiroDigito *= 1;
segundoDigito *= 2;
terceiroDigito *= 3;
quartoDigito *= 4;
quintoDigito *= 5;
sextoDigito *= 6;

soma = (primeiroDigito + segundoDigito + terceiroDigito + quartoDigito + quintoDigito + sextoDigito) % 10;

digitoVerificador = 10 - soma;

console.log(`Seu numero com dígito verificador é: ${numero}-${digitoVerificador}`);
