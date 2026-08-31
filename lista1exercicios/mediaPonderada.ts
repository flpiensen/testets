import Media from "readline-sync";

let nota1: number = 0,
    nota2: number = 0,
    nota3: number = 0,
    nota4: number = 0,
    peso1: number = 1,
    peso2: number = 2,
    peso3: number = 3,
    peso4: number = 4,
    mediaPonderada: number = 0;

console.log("Digite as quatro notas e seus respectivos pesos para calcular a média ponderada: ");

nota1 = Media.questionFloat("Digite a primeira nota: ");
nota2 = Media.questionFloat("Digite a segunda nota: ");
nota3 = Media.questionFloat("Digite a terceira nota: ");
nota4 = Media.questionFloat("Digite a quarta nota: ");

mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3 + nota4 * peso4) / (peso1 + peso2 + peso3 + peso4);

console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);
