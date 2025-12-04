---
title: "OBI - Modalidade Programação (Nível 1) - Fase 2 - 2011"
description: "Balé (Contagem de Inversões)"
slug: "resolucao-nivel-2-2011"
author: "Vinicius Lima"
---
### Balé (Contagem de Inversões)

Uma academia possui $N$ bailarinas. O dono quer escolher uma dupla onde:

1. Uma bailarina é **mais antiga** na academia que a outra.
2. A bailarina mais antiga deve ter **habilidade maior** que a mais nova.

A entrada fornece a lista de habilidades em **ordem cronológica** (da mais antiga para a mais nova). Seu objetivo é contar quantos pares $(i, j)$ existem tal que $i < j$ (índice da primeira é menor que o da segunda) e $\text{Habilidade}[i] > \text{Habilidade}[j]$.

> Em Ciência da Computação, esse problema é conhecido como **Contagem de Inversões** de um *array*.

**Entrada**

A primeira linha contém um inteiro $N$. A segunda linha contém $N$ inteiros representando as habilidades das bailarinas, em ordem de chegada.

**Saída**

Um único inteiro representando o número de duplas válidas.

**Restrições**

* $1 \leq N \leq 100\,000$
* Habilidades distintas entre 1 e $100\,000$.

**Exemplos**

| Entrada | Saída |
| :--- | :--- |
| 5<br>1 5 2 4 3 | 4 |
| 9<br>9 8 7 6 5 4 3 1 2 | 35 |

---
### Solução

Uma verificação de todos os pares possíveis (abordagem ingênua) teria complexidade $O(N^2)$, o que é muito lento para $N = 100\,000$. Para garantir a eficiência exigida pelas restrições de $N$, utilizamos o algoritmo **Merge Sort modificado**.

A complexidade final do algoritmo será $O(N \log N)$.

#### Lógica de Contagem no Merge Sort

O Merge Sort divide o vetor ao meio recursivamente e depois intercala (une) as partes ordenadas. Durante a etapa de **intercalação (merge)** de duas metades (Esquerda e Direita) já ordenadas, podemos contar as inversões:

1.  Se o elemento atual da **Esquerda** $(\text{E}[i])$ for menor ou igual ao elemento da **Direita** $(\text{D}[j])$, ele é copiado para o vetor temporário normalmente.
2.  Se o elemento atual da **Esquerda** $(\text{E}[i])$ for **maior** que o elemento atual da **Direita** $(\text{D}[j])$, isso constitui uma inversão.
    * Como a metade Esquerda já está ordenada, se $\text{E}[i] > \text{D}[j]$, então todos os elementos subsequentes na metade Esquerda (de $i$ até o final) também são maiores que $\text{D}[j]$.
    * Portanto, adicionamos à resposta o número de elementos restantes na metade esquerda, calculado por: **(TamanhoEsquerda − i)**.



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

    const arr = new Int32Array(N);
    for (let i = 0; i < N; i++) {
        arr[i] = readInt();
    }

    // Array auxiliar global para o Merge Sort (evita alocacao de memoria excessiva)
    const temp = new Int32Array(N);
    let inversions = 0;

    // Funcao de Merge (Intercalacao)
    function merge(left, mid, right) {
        let i = left; // Indice inicio esquerda
        let j = mid + 1; // Indice inicio direita
        let k = left; // Indice temp

        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                // Se arr[i] > arr[j], eh uma INVERSAO.
                // Quantidade = (mid + 1) - i
                inversions += (mid + 1 - i);
                temp[k++] = arr[j++];
            }
        }

        // Copia restantes da esquerda
        while (i <= mid) temp[k++] = arr[i++];
        // Copia restantes da direita
        while (j <= right) temp[k++] = arr[j++];

        // Copia de volta para o array original
        for (let x = left; x <= right; x++) {
            arr[x] = temp[x];
        }
    }

    // Merge Sort Recursivo
    function mergeSort(left, right) {
        if (left < right) {
            const mid = (left + right) >>> 1; // Divisao inteira por 2
            mergeSort(left, mid);
            mergeSort(mid + 1, right);
            merge(left, mid, right);
        }
    }

    mergeSort(0, N - 1);

    console.log(inversions);
}

solve();
```

---
title: "OBI - Modalidade Programação (Nível 1) - Fase 2 - 2011"
description: "Calculadora (Multiplicação e Divisão por Fatores Primos)"
slug: "obi-2011-fase2-programacao-nivel1-calculadora"
author: "Vinicius Lima"
---
### Calculadora

A organização SBC inspeciona calculadoras que realizam apenas **multiplicação** (`*`) e **divisão** (`/`) por números de um **único dígito** (1 a 9). A calculadora inicia com o valor **1**. Uma sequência de $N$ operações é fornecida.

Apesar de a entrada ser limitada a um dígito, o visor pode exibir números fracionários ou muito grandes durante o processo. No entanto, é garantido que o **resultado final é um número inteiro** que cabe em uma variável padrão (até $2^{30}$).

Sua tarefa é processar as operações e imprimir o resultado final.

**Entrada**

A primeira linha contém um inteiro $N$. As próximas $N$ linhas contêm um dígito e um caractere (`*` ou `/`).

**Saída**

Uma única linha com o resultado inteiro final.

**Restrições**

* $1 \leq N \leq 100\,000$
* Resultado final $\leq 2^{30}$.

**Exemplos**

| Entrada | Saída |
| :--- | :--- |
| 3<br>2 *<br>1 *<br>3 * | 6 |
| 3<br>2 /<br>3 /<br>6 * | 1 |
| 11<br>9 *<br>... (9x)<br>9 / | 387420489 |

---
### Solução

A simulação direta das operações usando números de ponto flutuante (`double`) é arriscada devido a possíveis **erros de precisão**, o que comprometeria o resultado final, que deve ser exato. Usar inteiros gigantes (`BigInt`) para numerador e denominador seria computacionalmente custoso para $N=100\,000$.

A melhor abordagem é utilizar a **fatoração prima** dos números de 1 a 9. Como todos os dígitos de entrada são pequenos, seus fatores primos são apenas: **2, 3, 5 e 7**.

Manteremos um contador para o expoente de cada um desses primos. O resultado final $R$ é dado por:
$$R = 2^{c_2} \cdot 3^{c_3} \cdot 5^{c_5} \cdot 7^{c_7}$$

#### Lógica de Processamento

* **Multiplicação por X (`*`):** Adicionamos os fatores primos de $X$ aos respectivos contadores.
* **Divisão por X (`/`):** Subtraímos os fatores primos de $X$ dos respectivos contadores.

| Dígito ($X$) | Fatoração Prima | Contadores ($c_2, c_3, c_5, c_7$) |
| :---: | :---: | :---: |
| 1 | Neutro | $(0, 0, 0, 0)$ |
| 2 | $2^1$ | $(1, 0, 0, 0)$ |
| 3 | $3^1$ | $(0, 1, 0, 0)$ |
| 4 | $2^2$ | $(2, 0, 0, 0)$ |
| 5 | $5^1$ | $(0, 0, 1, 0)$ |
| 6 | $2^1 \cdot 3^1$ | $(1, 1, 0, 0)$ |
| 7 | $7^1$ | $(0, 0, 0, 1)$ |
| 8 | $2^3$ | $(3, 0, 0, 0)$ |
| 9 | $3^2$ | $(0, 2, 0, 0)$ |

Como o resultado final é garantido ser inteiro e $\leq 2^{30}$, esta abordagem garante um cálculo **exato** e eficiente ($O(N)$).



[Image of prime factorization for small numbers]


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

// Funcao auxiliar para ler o operador (* ou /)
function readChar() {
    while (bufferIdx < buffer.length && buffer[bufferIdx] <= 32) bufferIdx++;
    if (bufferIdx >= buffer.length) return null;
    return buffer[bufferIdx++]; // Retorna o codigo ASCII
}

function solve() {
    const valN = readInt();
    if (valN === null) return;
    const N = valN;

    // Contadores para os expoentes dos primos 2, 3, 5, 7
    let p2 = 0, p3 = 0, p5 = 0, p7 = 0;

    for (let i = 0; i < N; i++) {
        const val = readInt();
        const op = readChar(); // 42 is '*', 47 is '/'
        
        // Determina o sinal: +1 se multiplicar, -1 se dividir
        const sign = (op === 42) ? 1 : -1;

        // Atualiza os contadores baseados na fatoracao do digito val
        if (val === 2) { p2 += sign; }
        else if (val === 3) { p3 += sign; }
        else if (val === 4) { p2 += 2 * sign; }
        else if (val === 5) { p5 += sign; }
        else if (val === 6) { p2 += sign; p3 += sign; }
        else if (val === 7) { p7 += sign; }
        else if (val === 8) { p2 += 3 * sign; }
        else if (val === 9) { p3 += 2 * sign; }
        // val === 1 nao faz nada
    }

    // Reconstroi o resultado
    // Como o resultado final cabe em 2^30, Math.pow e a multiplicacao
    // sao seguras em JavaScript sem perda de precisao.
    const res = Math.pow(2, p2) * Math.pow(3, p3) * Math.pow(5, p5) * Math.pow(7, p7);

    console.log(res);
}

solve();
```
