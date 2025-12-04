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
