# Estudo Comparativo dos Métodos Math: ceil(), floor(), round() e trunc()

## 1. Definição e Resumo dos Métodos

Em JavaScript e TypeScript, o objeto nativo `Math` disponibiliza diversos métodos para arredondar ou remover a parte fracionária (decimal) de um número real. Embora todos trabalhem com a conversão de números decimais para inteiros, cada um possui regras de arredondamento específicas, que se comportam de maneira diferente dependendo do sinal do número (positivo ou negativo).

| Método | Nome em Inglês | Regra de Arredondamento | Direção na Reta Numérica |
| :--- | :--- | :--- | :--- |
| **`Math.ceil()`** | *Ceiling* (Teto) | Arredonda sempre para o **maior** inteiro mais próximo. | Direção ao $+\infty$ |
| **`Math.floor()`** | *Floor* (Piso) | Arredonda sempre para o **menor** inteiro mais próximo. | Direção ao $-\infty$ |
| **`Math.round()`** | *Round* (Arredondamento padrão) | Arredonda para o inteiro **mais próximo**. Em caso de empate (`.5`), arredonda para cima. | Para o inteiro mais próximo (tie-break para $+\infty$) |
| **`Math.trunc()`** | *Truncate* (Truncamento) | **Descarta** a parte decimal, mantendo apenas a parte inteira. | Direção ao zero ($0$) |

---

## 2. Detalhamento de Cada Método

### 2.1. `Math.ceil(x)`
O método `Math.ceil()` (do inglês *ceiling*, que significa "teto") retorna o menor número inteiro que seja **maior ou igual** ao número fornecido.
* **Números Positivos:** Eleva o número para o próximo inteiro acima.
* **Números Negativos:** Aproxima o número do zero (já que números menos negativos são maiores).

*Exemplos:*
* `Math.ceil(4.1)` $\rightarrow$ `5`
* `Math.ceil(4.7)` $\rightarrow$ `5`
* `Math.ceil(-4.1)` $\rightarrow$ `-4`
* `Math.ceil(-4.7)` $\rightarrow$ `-4`

---

### 2.2. `Math.floor(x)`
O método `Math.floor()` (do inglês *floor*, que significa "piso") retorna o maior número inteiro que seja **menor ou igual** ao número fornecido.
* **Números Positivos:** Trunca/reduz o número para o inteiro abaixo.
* **Números Negativos:** Afasta o número do zero (torna-o mais negativo).

*Exemplos:*
* `Math.floor(4.1)` $\rightarrow$ `4`
* `Math.floor(4.7)` $\rightarrow$ `4`
* `Math.floor(-4.1)` $\rightarrow$ `-5`
* `Math.floor(-4.7)` $\rightarrow$ `-5`

---

### 2.3. `Math.round(x)`
O método `Math.round()` aplica o arredondamento aritmético tradicional. Retorna o valor do número arredondado para o inteiro mais próximo.
* Se a parte fracionária for menor que `0.5`, arredonda para baixo.
* Se a parte fracionária for maior ou igual a `0.5`, arredonda para cima (em direção ao $+\infty$).

*Exemplos:*
* `Math.round(4.4)` $\rightarrow$ `4`
* `Math.round(4.5)` $\rightarrow$ `5`
* `Math.round(-4.4)` $\rightarrow$ `-4`
* `Math.round(-4.5)` $\rightarrow$ `-4` *(Nota: $-4.5$ arredondado em direção a $+\infty$ resulta em $-4$)*
* `Math.round(-4.6)` $\rightarrow$ `-5`

---

### 2.4. `Math.trunc(x)`
O método `Math.trunc()` (do inglês *truncate*, que significa "cortar" ou "truncar") simplesmente remove os dígitos decimais de um número, ignorando completamente a fração e retornando apenas a parte inteira.
* Não faz cálculos de aproximação.
* É o método equivalente e ideal para **divisão inteira** em JavaScript/TypeScript.

*Exemplos:*
* `Math.trunc(4.1)` $\rightarrow$ `4`
* `Math.trunc(4.9)` $\rightarrow$ `4`
* `Math.trunc(-4.1)` $\rightarrow$ `-4`
* `Math.trunc(-4.9)` $\rightarrow$ `-4`

---

## 3. Tabela Comparativa Prática

A tabela a seguir demonstra o comportamento dos 4 métodos com diferentes entradas, destacando a variação entre números positivos, negativos e pontos médios (`.5`):

| Entrada (`x`) | `Math.ceil(x)` | `Math.floor(x)` | `Math.round(x)` | `Math.trunc(x)` |
| :---: | :---: | :---: | :---: | :---: |
| **`4.1`** | `5` | `4` | `4` | `4` |
| **`4.5`** | `5` | `4` | `5` | `4` |
| **`4.9`** | `5` | `4` | `5` | `4` |
| **`-4.1`** | `-4` | `-5` | `-4` | `-4` |
| **`-4.5`** | `-4` | `-5` | `-4` | `-4` |
| **`-4.9`** | `-4` | `-5` | `-5` | `-4` |

---

## 4. Diferença Crítica: `Math.floor()` vs `Math.trunc()`

Para números **positivos**, `Math.floor()` e `Math.trunc()` produzem exatamente o mesmo resultado:
* `Math.floor(4.7)` $\rightarrow$ `4`
* `Math.trunc(4.7)` $\rightarrow$ `4`

Porém, para números **negativos**, os comportamentos divergem:
* `Math.floor(-4.7)` empurra o número para baixo (em direção ao $-\infty$), resultando em **`-5`**.
* `Math.trunc(-4.7)` apenas descarta a parte decimal, resultando em **`-4`**.

Por essa razão, para implementar a **divisão inteira** na disciplina de programação (onde o objetivo é simplesmente descartar as casas decimais sem alterar a lógica do sinal), **`Math.trunc()`** é a função correta a ser utilizada.

---

## 5. Exemplo de Código em TypeScript

```typescript
// Teste prático dos métodos da classe Math
let valorPositivo: number = 4.7;
let valorNegativo: number = -4.7;

console.log("--- Valores Positivos (4.7) ---");
console.log("Math.ceil(4.7):", Math.ceil(valorPositivo));   // Saída: 5
console.log("Math.floor(4.7):", Math.floor(valorPositivo)); // Saída: 4
console.log("Math.round(4.7):", Math.round(valorPositivo)); // Saída: 5
console.log("Math.trunc(4.7):", Math.trunc(valorPositivo)); // Saída: 4

console.log("\n--- Valores Negativos (-4.7) ---");
console.log("Math.ceil(-4.7):", Math.ceil(valorNegativo));   // Saída: -4
console.log("Math.floor(-4.7):", Math.floor(valorNegativo)); // Saída: -5
console.log("Math.round(-4.7):", Math.round(valorNegativo)); // Saída: -5
console.log("Math.trunc(-4.7):", Math.trunc(valorNegativo)); // Saída: -4
```