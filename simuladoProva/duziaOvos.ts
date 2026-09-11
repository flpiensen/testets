import teclado from "readline-sync";

const   EMBDUZIA: number = 12,
        EMBMEIADUZIA: number = 6;

let     qtdProduzido: number = 0,
        qtdEmbalado: number = 0,
        qtdResto: number = 0,
        qtdEmbMediaDuzia: number =0,
        qtdDiaSeguinte: number = 0;

console.log("Qual foi a quantidade de ovos produzido no dia de hoje?");
qtdProduzido = teclado.questionInt();

qtdEmbalado = Math.trunc(qtdProduzido / EMBDUZIA);
qtdResto = qtdProduzido % EMBDUZIA;
qtdEmbMediaDuzia = Math.trunc(qtdResto / EMBMEIADUZIA);
qtdDiaSeguinte = qtdResto % EMBMEIADUZIA;

console.log(`No dia de hoje foram produzidos ${qtdEmbalado} caixas 12 unidades`);
console.log(`${qtdEmbMediaDuzia} caixas com 6 unidades.`);
console.log(`${qtdDiaSeguinte} ovos ficaram para o dia seguinte.`)