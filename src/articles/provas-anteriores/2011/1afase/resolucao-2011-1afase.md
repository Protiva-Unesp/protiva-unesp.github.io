---
title: "OBI: Iniciação - Nível 1 (2011) 1a Fase"
description: "Progressões Aritméticas"
slug: "resolucao-nivel-1-2011"
author: "Dayna"
---
### Progressões aritméticas

Bob quer dividir uma sequˆencia de n ́umeros em partes menores, de modo que cada parte seja uma
Progress ̃ao Aritm ́etica (PA). Uma PA  ́e uma sequˆencia onde a diferen ̧ca entre termos consecutivos  ́e
constante (chamada de raz ̃ao r).

Por exemplo:

- 1, 2, 3, 4, 5  ́e uma PA (r = 1).
- -2, 0, 2  ́e uma PA (r = 2).
- 5, 6, 8, 9, 10 n ̃ao  ́e uma PA, mas pode ser quebrada em 5, 6 (PA) e 8, 9, 10 (PA).

O objetivo  ́e encontrar o **n ́umero m ́ınimo de partes** necess ́arias.

### Entrada
A primeira linha cont ́em um inteiro N. A segunda linha cont ́em N inteiros Ai


### Sa ́ıda
Imprima uma  ́unica linha indicando o n ́umero m ́ınimo de partes (subsequˆencias PAs).

#### Restri ̧c ̃oes
- 1 ≤ N ≤ 105
- −105 ≤ Ai ≤ 105

### Exemplos

### Entrada
5
1 2 3 4 5

### Saída
1

### Entrada
7
-2 0 2 3 3 4 6

### Saída
3

### Entrada
4
-2 0 3 6

### Saída
2

### Solu ̧c ̃ao
Utilizamos uma abordagem gulosa: tentamos manter a PA atual o maior tempo poss ́ıvel. Come ̧camos
assumindo que a primeira PA tem a raz ̃ao r = A[1]−A[0]. Percorremos o vetor verificando a diferen ̧ca

diff = A[i] − A[i − 1].

1. Se diff == r: A sequˆencia continua sendo uma PA. Continuamos.

2. Se diff ̸= r: A PA ”quebrou”.

- O elemento A[i] passa a ser o in ́ıcio de uma nova PA.
- Incrementamos o contador de partes.
- Precisamos definir a nova raz ̃ao. A nova raz ̃ao ser ́a dada pelo pr ́oximo par: A[i+1]−A[i].
- Avan ̧camos o  ́ındice para pular essa redefini ̧c ̃ao e continuar a verifica ̧c ̃ao.

Essa estrat ́egia funciona porque cortar uma PA antes do necess ́ario nunca diminui o n ́umero total
de partes; pelo contr ́ario, pode aument ́a-lo.

### C ́odigo em JavaScript (Fast I/O):
```javascript
const fs = require (’fs ’) ;

// --- FAST I/O ---
const buffer = fs . readFileSync (0) ;
let bufferIdx = 0;

function readInt () {
    let res = 0 , sign = 1;
    while ( bufferIdx < buffer . length && buffer [ bufferIdx ] <= 32) bufferIdx ++;
    if ( bufferIdx >= buffer . length ) return null ;
    if ( buffer [ bufferIdx ] === 45) { sign = -1; bufferIdx ++; }
    while ( bufferIdx < buffer . length && buffer [ bufferIdx ] > 32) {
        res = res * 10 + ( buffer [ bufferIdx ++] - 48) ;
    }
    return res * sign ;
}

function solve () {
    const valN = readInt () ;
    if ( valN === null ) return ;
    const N = valN ;
    
    const A = new Int32Array ( N ) ;
    for ( let k = 0; k < N ; k ++) {
        A [ k ] = readInt () ;
    }

    // Casos triviais : sequencias de 1 ou 2 numeros sao sempre 1 PA
    if ( N <= 2) {
        console . log (1) ;

    return ;
}
```
