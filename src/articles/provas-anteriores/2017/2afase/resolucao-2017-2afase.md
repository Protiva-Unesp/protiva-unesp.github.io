---
title: "OBI: Iniciação - Nível 2 (2017) 2a Fase"
description: "Jogo de tabuleiro"
slug: "resolucao-nivel-2-2017"
author: "Dayna"
---
### Jogo de Tabuleiro
Flavinho inventou uma forma de preencher um tabuleiro de N linhas e N colunas com pedras brancas
(representadas por 0) e pretas (representadas por 1).

Inicialmente, ele preenche a primeira linha e a primeira coluna. As demais c ́elulas s ̃ao preenchidas
com base na seguinte regra: Para uma c ́elula (i, j) (onde i, j > 1), olhamos para as trˆes c ́elulas
vizinhas anteriores: (i, j − 1), (i − 1, j − 1) e (i − 1, j).

- Se houver mais pedras brancas (0) nessas trˆes vizinhas, a c ́elula atual ser ́a preta (1).
- Se houver mais pedras pretas (1) nessas trˆes vizinhas, a c ́elula atual ser ́a branca (0).

Basicamente, a cor da c ́elula  ́e a cor oposta `a maioria dos seus vizinhos superiores/esquerdos.
Dado o tabuleiro inicial (com apenas a primeira linha e coluna preenchidas e o resto marcado com
9), descubra a cor da pedra na posi ̧c ̃ao (N, N).

### Entrada
A primeira linha cont ́em um inteiro N. As N linhas seguintes contˆem, cada uma, N inteiros. A
primeira linha e coluna contˆem 0 ou 1. As demais posi ̧c ̃oes contˆem 9 (vazio).
Saída

Um  ́unico inteiro representando a cor da pedra na posi ̧c ̃ao (N, N): 0 para branca, 1 para preta.

### Restri ̧c ̃oes
- 2 ≤ N ≤ 100

### Exemplos
### Entrada

2
0 1
1 9

### Saída
0

### Entrada
6
0 0 1 0 0 0
1 9 9 9 9 9
0 9 9 9 9 9
0 9 9 9 9 9
1 9 9 9 9 9
1 9 9 9 9 9

### Saída
0

### Solu ̧c ̃ao
Como o tamanho do tabuleiro  ́e pequeno (N ≤ 100), temos no m ́aximo 10.000 c ́elulas, o que permite
uma simula ̧c ̃ao direta O(N2) sem problemas de tempo.

Lemos a matriz e iteramos a partir da linha 1 e coluna 1 ( ́ındices 0-based seriam linha 1 e coluna
1 tamb ́em, assumindo que a borda  ́e 0). Para cada c ́elula grid[i][j], somamos os valores dos
vizinhos:

S = grid[i − 1][j] + grid[i − 1][j − 1] + grid[i][j − 1]

Lembrando que 0 = Branca e 1 = Preta:
- Se S ≥ 2: Significa que temos 2 ou 3 pedras Pretas. A maioria  ́e Preta. A regra diz: ”Se mais
pretas, vire branca”. Logo, grid[i][j] = 0.
- Se S < 2: Significa que temos 0 ou 1 pedra Preta (logo, 2 ou 3 Brancas). A maioria  ́e Branca.

A regra diz: ”Se mais brancas, vire preta”. Logo, grid[i][j] = 1.

### C ́odigo em JavaScript (Fast I/O):

```python
const fs = require (’fs ’) ;

// --- FAST I/O ---
const buffer = fs . readFileSync (0) ;
let bufferIdx = 0;

function readInt () {
let res = 0;
// Pula espacos
while ( bufferIdx < buffer . length && buffer [ bufferIdx ] <= 32) bufferIdx ++;
if ( bufferIdx >= buffer . length ) return null ;

// Le numero
while ( bufferIdx < buffer . length && buffer [ bufferIdx ] > 32) {
res = res * 10 + ( buffer [ bufferIdx ++] - 48) ;
}
return res ;
}

function solve () {
const N = readInt () ;
if ( N === null ) return ;

// Criamos a matriz N x N
// Podemos usar um array unico ( flat ) ou array de arrays .
// Como N eh pequeno , array de arrays eh mais legivel e performatico o
iciente .
const grid = new Array ( N ) ;

// Leitura da matriz
for ( let i = 0; i < N ; i ++) {
grid [ i ] = new Int8Array ( N ) ; // Int8 economiza memoria
for ( let j = 0; j < N ; j ++) {
grid [ i ][ j ] = readInt () ;
}
}

// Processamento
// Comecamos da linha 1 e coluna 1 ( pois a 0 ja esta preenchida )
for ( let i = 1; i < N ; i ++) {
for ( let j = 1; j < N ; j ++) {
// Vizinhos : Cima , Esquerda , Diagonal Sup -Esq
const neighborSum = grid [i -1][ j ] + grid [ i ][ j -1] + grid [i -1][ j -1];

// Regra :
// Maioria Preta ( soma >= 2) -> Vira Branca (0)
// Maioria Branca ( soma <= 1) -> Vira Preta (1)
if ( neighborSum >= 2) {
grid [ i ][ j ] = 0;
} else {
grid [ i ][ j ] = 1;
}
}
}

// Saida : valor da ultima celula
console . log ( grid [N -1][ N -1]) ;
}

solve ();
```


