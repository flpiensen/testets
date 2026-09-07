import tamanhoEscada from "readline-sync";

let escada: number = 0,
    altura: number = 0,
    distancia: number = 0;

console.log("Calcule e exiba o comprimento mínimo que a escada deve ter para alcançar o topo do prédio.");
altura = tamanhoEscada.questionFloat("Digite o tamanho do edificio: ");
distancia = tamanhoEscada.questionFloat("Digite a distância da escada até o edificio: ");

escada = Math.sqrt((altura*altura) + (distancia*distancia));

console.log(`O tamanho de escada necessário é ${escada} metros`);