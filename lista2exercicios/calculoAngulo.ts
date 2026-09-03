import calculoAnglo from "readline-sync";

let angulo: number = 0,
    anguloCorrespondenteRestante = 0,
    anguloCorrespondente: number = 0,
    anguloRadiano: number = 0,
    seno: number = 0,
    cosseno: number = 0,
    tangente: number = 0;

console.log("Digite o valor do ângulo em graus: ");
angulo = calculoAnglo.questionFloat("Digite o ângulo: ");

anguloCorrespondente = Math.trunc(angulo / 360);
anguloCorrespondenteRestante = angulo % 360;

anguloRadiano = (Math.PI*anguloCorrespondenteRestante)/180;
seno = Math.sin(anguloRadiano);
cosseno = Math.cos(anguloRadiano);
tangente = Math.tan(anguloRadiano);

/*
    ---inicialmente pensei dessa forma--- 
seno = anguloRadiano - ((anguloRadiano ** 3) / 6) + ((anguloRadiano ** 5) / 120);
cosseno = 1 - ((anguloRadiano ** 2) / 2) + ((anguloRadiano ** 4) / 24);
tangente = seno / cosseno; 
*/

console.log(`O angulo ${angulo} corresponde a ${anguloCorrespondente} voltas completas que correspondem a 360º`);
console.log(`O angulo correspondente é ${anguloCorrespondenteRestante}°`);
console.log(`Convertendo para radianos temos: ${anguloRadiano}rad`);
console.log(`O seno deste angulo radiano é: ${seno.toFixed(4)}`);
console.log(`O cosseno deste angulo radiano é: ${cosseno.toFixed(4)}`);
console.log(`A tangente deste angulo radiano é: ${tangente.toFixed(4)}`);