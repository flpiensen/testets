import calculoAnglo from "readline-sync";

let angulo: number = 0,
    anguloCorrespondenteRestante = 0,
    anguloCorrespondente: number = 0,
    anguloRadiano: number = 0,
    seno: number = 0,
    cosseno: number = 0,
    tangente: number = 0,
    resto: number = 0;

console.log("Digite o valor do ângulo em graus: ");
angulo = calculoAnglo.questionFloat("Digite o ângulo: ");

anguloCorrespondente = Math.trunc(angulo / 360);
anguloCorrespondenteRestante = angulo % 360;

anguloRadiano = (Math.PI*anguloCorrespondenteRestante)/180;


seno = anguloRadiano - ((anguloRadiano ** 3) / 6) + ((anguloRadiano ** 5) / 120);
cosseno = 1 - ((anguloRadiano ** 2) / 2) + ((anguloRadiano ** 4) / 24);
tangente = seno / cosseno;

console.log(`O angulo ${angulo} corresponde a ${anguloCorrespondente} voltas completas que correspondem a 360º`);
console.log(`O angulo correspondente é ${anguloCorrespondenteRestante}º`);
console.log(`Convertendo para radianos temso ${anguloRadiano}rad`);
console.log(seno);
console.log(cosseno);
console.log(tangente);