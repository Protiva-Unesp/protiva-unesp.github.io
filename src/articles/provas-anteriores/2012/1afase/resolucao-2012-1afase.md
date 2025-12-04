---
title: "OBI: Iniciação - Nível 1 (2012) 1a Fase"
description: "Jogo de tabuleiro"
slug: "resolucao-nivel-1-2011"
author: "Dayna"
---
### Vice-campe ̃ao
A OBI (Organiza ̧c ̃ao de Bocha Internacional) decidiu classificar para a Grande Final Mundial n ̃ao
apenas o campe ̃ao, mas tamb ́em o vice-campe ̃ao (segundo colocado) de cada pa ́ıs.

Na Tumb ́olia, a competi ̧c ̃ao j ́a ocorreu e participaram apenas trˆes competidores. As pontua ̧c ̃oes
foram registradas, mas n ̃ao a classifica ̧c ̃ao final. Sabe-se que as pontua ̧c ̃oes s ̃ao distintas (n ̃ao houve
empate).

Sua tarefa  ́e, dadas as trˆes pontua ̧c ̃oes, determinar qual delas corresponde ao vice-campe ̃ao (ou
seja, a segunda maior pontua ̧c ̃ao).

### Entrada
A entrada consiste em uma  ́unica linha contendo trˆes inteiros A, B e C, separados por espa ̧co,
representando as pontua ̧c ̃oes dos trˆes competidores.

### Sa ́ıda
Imprima uma  ́unica linha contendo um inteiro: a pontua ̧c ̃ao do vice-campe ̃ao.

### Restri ̧c ̃oes
- 1 ≤ A, B, C ≤ 100
- A ̸= B ̸= C (todos distintos)

### Exemplos
### Entrada
4 5 6

### Saída
5

### Entrada
10 5 9

### Saída
9

### Solu ̧c ̃ao
O problema pede para encontrarmos o valor mediano entre trˆes n ́umeros. Embora seja poss ́ıvel fazer
isso com v ́arios if/else, a solu ̧c ̃ao mais limpa e escal ́avel  ́e:

1. Armazenar os trˆes valores em uma lista (array).

2. Ordenar a lista em ordem crescente (ou decrescente).

3. O vice-campe ̃ao ser ́a, invariavelmente, o elemento do meio ( ́ındice 1, considerando  ́ındices 0, 1, 2).

Complexidade: O(1) (pois N = 3  ́e constante).

### C ́odigo em JavaScript (Fast I/O):
```javascript
const fs = require (’fs ’) ;

// --- FAST I/O ---
const buffer = fs . readFileSync (0) ;
let bufferIdx = 0;

function readInt () {
    let res = 0;
    while ( bufferIdx < buffer . length && buffer [ bufferIdx ] <= 32) bufferIdx ++;
    if ( bufferIdx >= buffer . length ) return null ;
    while ( bufferIdx < buffer . length && buffer [ bufferIdx ] > 32) {
        res = res * 10 + ( buffer [ bufferIdx ++] - 48) ;
    }
    return res ;
}

function solve () {
    // Le os 3 valores
    const A = readInt () ;
    const B = readInt () ;
    const C = readInt () ;
    
    if ( A === null ) return ;
    
    // Coloca em um array
    const scores = [A , B , C ];
    
    // Ordena numericamente
    // A funcao de comparacao (a, b) = > a - b garante ordem crescente
    scores . sort (( a , b ) = > a - b ) ;
    
    // O vice - campeao eh o elemento do meio ( indice 1)
    // [Menor , Meio , Maior ]
    console . log ( scores [1]) ;
}

solve () ;
```

---
title: "OBI - Modalidade Programação (Nível 1) - Fase 1 - 2012"
description: "Consecutivos (Maior Sequência de Valores Iguais)"
slug: "obi-2012-fase1-programacao-nivel1-consecutivos"
author: "Vinicius Lima"
---
### Consecutivos

Em um sorteio, um participante recebe $N$ valores. A pontuação é definida pelo tamanho da **maior sequência de valores consecutivos iguais**.

**Exemplo:**
Na sequência: `30, 30, 30, 40, 40, 40, 40, 40, 30, 30, 30`
* O maior bloco de números iguais é o de `40s`, com **5** elementos.
* A pontuação máxima é **5**.

Sua tarefa é ler a sequência e determinar essa pontuação máxima.

**Entrada**

A primeira linha contém um inteiro $N$. A segunda linha contém $N$ inteiros $V_i$, na ordem do sorteio.

**Saída**

Imprima uma única linha contendo um inteiro indicando o número de pontos (tamanho da maior sequência consecutiva).

**Restrições**

* $1 \leq N \leq 10^4$
* $-2^{31} \leq V_i \leq 2^{31} - 1$ (Inteiros de 32 bits)

**Exemplos**

| Entrada | Saída |
| :--- | :--- |
| 11<br>30 30 30 40 40 40 40 40 30 30 30 | 5 |
| 14<br>1 1 1 20 20 20 20 3 3 3 3 3 3 3 | 7 |

---
### Solução

O problema pode ser resolvido com uma complexidade $O(N)$ simplesmente percorrendo a entrada uma única vez. Esta abordagem é altamente eficiente, pois o tempo de execução cresce linearmente com o tamanho da entrada.

#### Algoritmo (Percurso Único)

Mantemos o controle de duas variáveis principais enquanto iteramos sobre a lista de números:

1.  `currentCount`: Conta quantos números iguais ao atual foram vistos consecutivamente.
2.  `maxCount`: Armazena o maior valor que `currentCount` já atingiu.

Para cada novo número lido:

* **Se for igual ao anterior:** Incrementamos `currentCount`.
* **Se for diferente:** Comparamos `currentCount` com `maxCount` (atualizando `maxCount` se `currentCount` for maior) e, em seguida, **resetamos** `currentCount` para 1, pois um novo bloco de números consecutivos começa.

> **Atenção:** É crucial fazer uma verificação final de `currentCount` contra `maxCount` após o *loop* terminar, pois a maior sequência pode ser a última da entrada, e a atualização de `maxCount` só ocorre quando uma sequência é quebrada.



**Código em JavaScript (com Fast I/O):**

```javascript
const fs = require('fs');

// --- FAST I/O para leitura eficiente de grandes inputs (incluindo negativos) ---
const buffer = fs.readFileSync(0);
let bufferIdx = 0;

function readInt() {
    let res = 0, sign = 1;
    while (bufferIdx < buffer.length && buffer[bufferIdx] <= 32) bufferIdx++;
    if (bufferIdx >= buffer.length) return null;

    if (buffer[bufferIdx] === 45) { // Se for negativo '-' (ASCII 45)
        sign = -1;
        bufferIdx++;
    }

    while (bufferIdx < buffer.length && buffer[bufferIdx] > 32) {
        res = res * 10 + (buffer[bufferIdx++] - 48);
    }
    return res * sign;
}

function solve() {
    const valN = readInt();
    if (valN === null) return;
    const N = valN;

    if (N === 0) {
        console.log(0);
        return;
    }

    let maxCount = 0;
    let currentCount = 0;
    let lastVal = null; // Valor anterior para comparacao

    for (let i = 0; i < N; i++) {
        const val = readInt();

        if (i === 0) {
            // Primeiro numero da sequencia: inicializa as contagens
            lastVal = val;
            currentCount = 1;
            maxCount = 1;
        } else {
            if (val === lastVal) {
                // Continua a sequencia
                currentCount++;
            } else {
                // Quebrou a sequencia: atualiza o maximo
                if (currentCount > maxCount) {
                    maxCount = currentCount;
                }
                // Reseta para o novo numero
                currentCount = 1;
                lastVal = val;
            }
        }
    }

    // Checagem final: caso a maior sequencia seja a última do vetor
    if (currentCount > maxCount) {
        maxCount = currentCount;
    }

    console.log(maxCount);
}

solve();
```