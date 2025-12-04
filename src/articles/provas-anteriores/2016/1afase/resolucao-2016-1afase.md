---
title: "OBI: Iniciação - Nível 1 (2016) 1a Fase"
description: "Jogo de tabuleiro"
slug: "resolucao-nivel-1-2011"
author: "Dayna"
---
### Tacos de Bilhar
Jogos de bilhar, em que tacos s ̃ao usados para arremessar uma bola contra outras em uma mesa,
tˆem muitas variantes, como sinuca, mata-mata, bilhar francˆes e outras. O Sr. Jorge  ́e um renomado
artes ̃ao que fabrica tacos de bilhar sob encomenda.

Cada vez que um cliente pede um taco de um dado comprimento, o Sr. Jorge primeiro verifica
se ele tem um taco com esse comprimento no estoque.

- Se tem, ele envia o taco para o cliente.
- Se n ̃ao tem, ele faz duas c ́opias do taco, envia uma para o cliente e guarda a outra no estoque.

Assim, ele nunca tem no estoque mais do que um taco com um determinado comprimento. O
estoque do Sr. Jorge est ́a muito grande, e ele tem perdido muito tempo procurando por tacos. Ele
pensa em usar um sistema computadorizado para manter o seu estoque de tacos.

Dadas as consultas ao estoque, calcule o n ́umero total de tacos fabricados, supondo que inicial-
mente o estoque esteja vazio.

### Entrada
A primeira linha da entrada cont ́em um inteiro C que indica o n ́umero de consultas ao estoque. A
segunda linha cont ́em C n ́umeros inteiros, indicando as consultas ao estoque. Cada valor de consulta
indica o comprimento de um taco desejado.

### Saída
Seu programa dever ́a imprimir um  ́unico n ́umero, o n ́umero de tacos fabricados.

### Restri ̧c ̃oes
- 1 ≤ C ≤ 105
- 1 ≤ comprimento dos tacos ≤ 106

### Informa ̧c ̃oes sobre a pontua ̧c ̃ao
Em um conjunto de casos de teste equivalente a 40 pontos, C ≤ 1000.

### Exemplos
### Entrada
4
80 100 80 50

### Saída
6

### Entrada
1
1000

### Saída
2

### Solu ̧c ̃ao
Para resolver este problema de forma eficiente, utilizamos a estrutura de dados Set (Conjunto). O
enunciado garante que o estoque nunca ter ́a mais de um taco do mesmo comprimento, funcionando
como um interruptor: ou tem (1), ou n ̃ao tem (0).

A l ́ogica aplicada  ́e:

1. Lemos o comprimento solicitado.

2. Verificamos se esse comprimento existe no Set de estoque.

3. Se existe: O Sr. Jorge usa o item do estoque. Removemos o item do Set (estoque volta a zero
para esse tamanho).

4. Se n ̃ao existe: O Sr. Jorge precisa fabricar. Ele faz 2 unidades. Somamos 2 ao total de tacos
fabricados e adicionamos o tamanho ao Set (pois uma unidade fica guardada).

Essa abordagem garante complexidade O(C), o que  ́e ideal dado que C pode chegar a 105.

### C ́odigo em JavaScript:
```javascript
var input = require (’fs ’) . readFileSync (’/dev / stdin ’, ’utf8 ’) ;
var lines = input . trim () . split (/\ s +/) ;

// lines [0] eh o numero de consultas C
var C = parseInt ( lines [0]) ;

// Usamos um Set para representar o estoque
// O Set armazena apenas valores unicos
var estoque = new Set () ;
var fabricados = 0;

// Percorre todas as consultas ( comecando do indice 1)
for ( var i = 1; i <= C ; i ++) {
    var pedido = parseInt ( lines [ i ]) ;
    
    if ( estoque . has ( pedido ) ) {
        // Se tem no estoque , vende ( remove do estoque )
        estoque . delete ( pedido ) ;
    } else {
        // Se nao tem , fabrica 2
        fabricados += 2;
        // Vende um e guarda o outro no estoque
        estoque . add ( pedido ) ;
    }
}

console . log ( fabricados ) ;
```
