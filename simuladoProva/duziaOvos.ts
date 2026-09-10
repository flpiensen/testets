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

qtdEmbalado = qtdProduzido / EMBDUZIA;
qtdResto = qtdProduzido % EMBDUZIA;
qtdEmbMediaDuzia = qtdResto / EMBMEIADUZIA;
qtdDiaSeguinte = qtdEmbMediaDuzia % EMBMEIADUZIA;

console.log(`No dia de hoje foram produzidos ${qtdEmbalado} caixas 12 unidades`)