import carga from "readline-sync";

let cargaHoraria: number = 0,
    horaAula: number = 50,
    horaRelogio: number = 60,
    quantidadeHorasRelogio: number = 0;

console.log("Digite a quantidade de horas aulas: ");
cargaHoraria = carga.questionInt("Quantidade de horas aulas: ");

quantidadeHorasRelogio = (cargaHoraria * horaAula);

let horas: number = Math.trunc(quantidadeHorasRelogio / horaRelogio),
    minutos: number = quantidadeHorasRelogio % horaRelogio;

console.log(`A carga horária é de ${horas} horas e ${minutos} minutos.`);