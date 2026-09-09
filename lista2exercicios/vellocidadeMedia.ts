import teclado from "readline-sync";

let distancia: number = 0,
    tempoPercurco: number = 0,
    velocidadeMedia: number = 0;

distancia = teclado.questionFloat("Digite uma distancia inicial em quilómetros: ");
tempoPercurco = teclado.questionFloat("Digite o tempo que você percorreu essa distância: ");

velocidadeMedia = distancia/tempoPercurco;

console.log(`Sua velocidade média é de ${velocidadeMedia}km/h`);