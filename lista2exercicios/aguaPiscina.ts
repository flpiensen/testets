import piscina from "readline-sync"

let raio: number = 0,
    altura: number = 0,
    area: number = 0,
    volume: number = 0,
    litros: number = 0;

console.log("Digite o raio da piscina e logo em seguida, digite a profundidade da mesma, ambos os valores em METROS");
raio = piscina.questionFloat("Digite o raio: ");
altura = piscina.questionFloat("Digite a altura: ");

area = (Math.PI)*(raio*raio)
volume = area*altura;
litros = volume*1000;

console.log(`O volume necessário de água para preencher sua piscina é de ${litros.toFixed(2)}L`)