import leitura from "readline-sync";

let totalPaginas: number = 0,
    paginasLidas: number = 0,
    percentualLeitura: number = 0;

console.log("Digite o total de páginas do livro e a pagina de leitura atual: ");
totalPaginas = leitura.questionInt("Qual é o total de paginas do seu livro? ");
paginasLidas = leitura.questionInt("Qual é a pagina de leitura atual? ");

percentualLeitura = (paginasLidas / totalPaginas) * 100;

console.log(`O percentual de leitura do livro é: ${percentualLeitura.toFixed(2)}%`);