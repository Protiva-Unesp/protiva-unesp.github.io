---
title: "OBI - Modalidade Programação (Nível 1) - Fase 2 - 2012"
description: "Guerra por Território (Soma de Prefixos e Sufixos)"
slug: "resolucao-nivel-2-2012"
author: "Vinicius Lima"
---
### Guerra por Território

Os territórios de Tombólia do Oeste e Tombólia do Leste são divididos em $N$ seções sequenciais, com tamanhos $a_1, a_2, \dots, a_N$.

O objetivo é encontrar um **ponto de corte $k$** tal que a soma dos tamanhos das seções à esquerda (incluindo $k$) seja exatamente igual à soma das seções à direita (após $k$).

A condição matemática é:
$$\sum_{i=1}^{k} a_i = \sum_{j=k+1}^{N} a_j$$

É garantido que tal divisão sempre existe.

**Entrada**

A primeira linha contém um inteiro $N$. A segunda linha contém $N$ inteiros $a_i$, indicando os tamanhos das seções.

**Saída**

Imprima um único inteiro $k$, indicando a seção (índice baseado em 1) onde acontece a divisão.

**Restrições**

* $1 \leq N \leq 10^5$
* $1 \leq a_i \leq 100$

**Exemplos**

| Entrada | Saída |
| :--- | :--- |
| 4<br>5 3 2 10 | 3 |
| 9<br>2 8 2 8 4 4 4 4 4 | 4 |

---
### Solução

A solução para este problema é extremamente eficiente, utilizando apenas dois percursos lineares (ou um único, se otimizado) do vetor, resultando em complexidade $O(N)$.

#### Algoritmo (Soma de Prefixos)

A chave é que, se o território deve ser dividido em duas partes iguais, a soma de cada parte deve ser exatamente a metade da soma total do território.

1.  **Calcular a Soma Total:** Percorremos o vetor e somamos todos os tamanhos das seções para obter a $\text{Soma}_{\text{Total}}$.
2.  **Definir o Alvo:** O lado esquerdo (Tombólia do Oeste) deve ter uma soma de $\text{Alvo} = \frac{\text{Soma}_{\text{Total}}}{2}$.
3.  **Encontrar o Corte:** Percorremos o vetor novamente (ou continuamos no mesmo *loop* se a soma total for calculada separadamente), acumulando uma $\text{Soma}_{\text{Atual}}$ a cada iteração. No momento em que $\text{Soma}_{\text{Atual}}$ for igual ao $\text{Alvo}$, encontramos o ponto de corte $k$.



**Código em JavaScript (com Fast I/O):**

```javascript
const fs = require('fs');

// --- FAST I/O para leitura eficiente de grandes inputs ---
const buffer = fs.readFileSync(0);
let bufferIdx = 0;

function readInt() {
    let res = 0;
    while (bufferIdx < buffer.length && buffer[bufferIdx] <= 32) bufferIdx++;
    if (bufferIdx >= buffer.length) return null;
    while (bufferIdx < buffer.length && buffer[bufferIdx] > 32) {
        res = res * 10 + (buffer[bufferIdx++] - 48);
    }
    return res;
}

function solve() {
    const valN = readInt();
    if (valN === null) return;
    const N = valN;

    // Armazena as secoes e calcula o total simultaneamente
    const sections = new Int32Array(N);
    let totalSum = 0;

    for (let i = 0; i < N; i++) {
        const val = readInt();
        sections[i] = val;
        totalSum += val;
    }

    // O alvo eh metade do total (Garantido ser um numero inteiro, pois a divisao existe)
    const target = totalSum / 2;
    let currentSum = 0;

    // Percorre para encontrar o ponto de corte (k)
    for (let i = 0; i < N; i++) {
        currentSum += sections[i];

        if (currentSum === target) {
            // O enunciado pede a secao k (indice baseado em 1)
            // Como i comeca em 0, a resposta eh i + 1
            console.log(i + 1);
            return;
        }
    }
}

solve();
```
