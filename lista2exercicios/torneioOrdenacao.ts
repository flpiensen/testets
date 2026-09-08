import ordenacao from "readline-sync";

let competidor1: number = 0,
    competidor2: number = 0,
    competidor3: number = 0,
    competidor4: number = 0,
    competidor5: number = 0,
    vencedor: number = 0,
    perdedor: number = 0;

console.log("Digite a pontuação dos cinco finalistas do torneio de videogame: ");
competidor1 = ordenacao.questionInt("Digite a pontuação do primeiro competidor: ");
competidor2 = ordenacao.questionInt("Digite a pontuação do segundo competidor: ");
competidor3 = ordenacao.questionInt("Digite a pontuação do terceiro competidor: ");
competidor4 = ordenacao.questionInt("Digite a pontuação do quarto competidor: ");
competidor5 = ordenacao.questionInt("Digite a pontuação do quinto competidor: ");

vencedor = Math.max(competidor1, competidor2, competidor3, competidor4, competidor5);
perdedor = Math.min(competidor1, competidor2, competidor3, competidor4, competidor5);

console.log(`O primeiro obteve ${vencedor} pontos, e o ultimo colocado obteve ${perdedor} mizeros pontos.`);
