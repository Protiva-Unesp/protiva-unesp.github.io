---
title: "OBI: Iniciação - Nível 1 (2017) 1a Fase"
description: "Jogo de tabuleiro"
slug: "resolucao-nivel-1-2011"
author: "Dayna"
---
### Segredo do cofre
O sistema de segredo para abrir um cofre envolve deslizar um controle sobre uma barra com N
posi ̧c ̃oes. Cada posi ̧c ̃ao cont ́em um n ́umero entre 0 e 9.

O segredo depende de quantas vezes cada n ́umero aparece dentro do controle enquanto ele  ́e
deslizado de uma posi ̧c ̃ao para outra. Por exemplo, se a barra  ́e 9 4 3 9 1 ... e movemos da
posi ̧c ̃ao 1 para a 9, contamos todos os n ́umeros nesse intervalo. Se em seguida movemos da 9 para a
4, contamos os n ́umeros no intervalo reverso.

Importante: O final de um movimento  ́e o in ́ıcio do pr ́oximo. Para n ̃ao contar o mesmo n ́umero
duas vezes no mesmo instante (o pivˆo), o n ́umero da posi ̧c ̃ao inicial de um movimento (exceto o
primeiro) n ̃ao deve ser re-contabilizado.

Dada a configura ̧c ̃ao da barra e a sequˆencia de movimentos, seu programa deve contar a frequˆencia
total de cada d ́ıgito (0 a 9).

### Entrada
A primeira linha cont ́em dois inteiros N e M (2 ≤ N, M ≤ 105). A segunda linha cont ́em N inteiros
(a barra). A terceira linha cont ́em M inteiros (a sequˆencia de posi ̧c ̃oes visitadas, 1-based).

### Sa ́ıda
Imprima uma linha com 10 inteiros, representando a contagem total de cada d ́ıgito de 0 a 9.

### Restri ̧c ̃oes
- 2 ≤ N ≤ 105
- 2 ≤ M ≤ 105

### Exemplos
### Entrada
14 5
9 4 3 9 1 2 4 5 1 1 9 7 0 5
1 9 4 11 13

### Saída
1 6 3 1 4 3 0 1 0 4

### Entrada
5 4
5 8 0 5 1
1 4 2 5

### Saída
3 1 0 0 0 3 0 0 2 0

### Solu ̧c ̃ao
Uma simula ̧c ̃ao direta (percorrer a barra posi ̧c ̃ao por posi ̧c ̃ao para cada movimento) teria complexi-
dade O(N × M), o que para 105 resulta em 1010 opera ̧c ̃oes (TLE).

A solu ̧c ̃ao eficiente utiliza **Soma de Prefixos (Prefix Sums)**. Constru ́ımos uma matriz auxil-
iar freq[N+1][10], onde freq[i][d] armazena quantas vezes o d ́ıgito d apareceu nas primeiras i posi ̧c ̃oes da barra.

Assim, para saber quantos d ́ıgitos d existem no intervalo [L, R], fazemos:

Quantidade = freq[R][d] − freq[L − 1][d]

Essa opera ̧c ̃ao  ́e O(1).

Detalhe do Pivˆo: Ao mover de A → B e depois de B → C, a posi ̧c ̃ao B  ́e o fim do primeiro
movimento e o in ́ıcio do segundo. Para n ̃ao contar B duas vezes, a l ́ogica  ́e:

1. Primeiro movimento (P1 → P2): Contamos o intervalo completo [P1, P2].

2. Pr ́oximos movimentos (Pant → Patual): Contamos o intervalo excluindo o in ́ıcio.

- Se indo para frente (Pant < Patual): Intervalo [Pant + 1, Patual].
- Se indo para tr ́as (Pant > Patual): Intervalo [Patual, Pant − 1].

### C ́odigo em JavaScript (Fast I/O):
```javascript
const fs = require (’fs ’) ;

// --- FAST I/O SETUP ---
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
const N = readInt () ;
const M = readInt () ;

if ( N === null ) return ;

// Matriz de Soma de Prefixos
// counts [i][d] = quantas vezes o digito ’d’ aparece em barra [0...i -1]
// Usamos Int32Array para performance e memoria
// Achatamos a matriz : index = i * 10 + d
const counts = new Int32Array (( N + 1) * 10) ;
// Leitura da Barra e Construcao do Prefix Sum
for ( let i = 1; i <= N ; i ++) {
const val = readInt () ;
// Copia os valores da posicao anterior
for ( let d = 0; d < 10; d ++) {
counts [ i * 10 + d ] = counts [( i - 1) * 10 + d ];
}
// Incrementa o digito atual
counts [ i * 10 + val ]++;
}

const result = new Int32Array (10) ;

// Leitura dos Movimentos
let prevPos = readInt () ; // Posicao 1 - based

// O primeiro movimento nao existe " anterior " ,
// mas precisamos contar o numero onde ele comeca ?
// O enunciado diz " deslizar DA posicao inicial ATE a proxima ".
// A logica padrao eh: 1o movimento conta start e end .
// Proximos contam so end ( pois start ja foi contado ).

// Vamos processar o primeiro movimento separadamente ou tratar tudo no loop ?
// Estrategia : Somar intervalos .
// Para o movimento i -> j: somar (min (i,j), max (i,j)).
// Porem , isso conta os pivos 2x.
// Entao subtraimos o valor da posicao ’prevPos ’ a cada iteracao ,
// EXCETO na primeira vez (ou somamos prevPos manualmente no final ).

// Melhor abordagem : Intervalo semi - aberto para movimentos subsequentes .
// Movimento 1 ( inicio -> dest ): Intervalo [inicio , dest ] ( Inclusivo )

for ( let k = 1; k < M ; k ++) {
const currPos = readInt () ;

let start , end ;

if ( k === 1) {
// Primeiro movimento : Inclusivo total
start = Math . min ( prevPos , currPos ) ;
end = Math . max ( prevPos , currPos ) ;
} else {
// Movimentos seguintes : Exclui o ponto de partida (ja contado )
if ( currPos > prevPos ) {
start = prevPos + 1;
end = currPos ;
} else {
start = currPos ;
end = prevPos - 1;
}
}

// Soma usando Prefix Sum
for ( let d = 0; d < 10; d ++) {
const countInRange = counts [ end * 10 + d ] - counts [( start - 1) * 10 +
;
result [ d ] += countInRange ;
}

prevPos = currPos ;
}

// Formata saida
console . log ( result . join (’ ’) ) ;
}

solve () ;
```
