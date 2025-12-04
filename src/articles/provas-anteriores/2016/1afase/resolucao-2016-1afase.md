---
title: "OBI: Iniciação - Nível 1 (2016) 1a Fase"
description: "Tacos de bilhar, Clube dos cinco"
slug: "resolucao-nivel-1-2016"
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

### Clube dos Cinco

No Clube dos Cinco são oferecidos três esportes aos associados: **tiro com arco (A)**, **badminton (B)** e **canoagem (C)**. Cada associado pode participar de no **máximo dois esportes**. A tarefa é descobrir se há alguma pessoa ultrapassando esse limite, ou seja, se existe alguém que pratica os três esportes simultaneamente.

Os dados fornecidos são:

* $N$: Número total de associados.
* $A$: Pessoas que praticam tiro com arco.
* $B$: Pessoas que praticam badminton.
* $C$: Pessoas que praticam canoagem.
* $D$: Pessoas que praticam tiro com arco e badminton ($\text{A} \cap \text{B}$).
* $E$: Pessoas que praticam tiro com arco e canoagem ($\text{A} \cap \text{C}$).
* $F$: Pessoas que praticam badminton e canoagem ($\text{B} \cap \text{C}$).
* $G$: Pessoas que não praticam nenhum esporte.

Você deve descobrir se o número de pessoas que praticam os três esportes, $T = (\text{A} \cap \text{B} \cap \text{C})$, é maior que zero.

**Entrada**

A primeira linha contém um inteiro $N$. A segunda linha contém sete inteiros $A, B, C, D, E, F$ e $G$.

**Saída**

Uma única letra: **"S"** se algum associado participa de três esportes, e **"N"**, caso contrário.

**Restrições**

* $1 \leq N \leq 10^4$
* $0 \leq A, B, C, D, E, F, G \leq N$

**Exemplos**

| Entrada | Saída |
| :--- | :--- |
| 7<br>4 4 4 1 1 2 0 | S |
| 8<br>4 4 4 1 1 2 0 | N |
| 10<br>4 4 4 1 1 1 1 | N |
| 7<br>4 4 4 1 1 1 1 | S |
| 10<br>4 4 4 0 0 0 1 | S |

---
### Solução (Teoria de Conjuntos)

Este problema pode ser resolvido usando o **Princípio da Inclusão-Exclusão** em Teoria de Conjuntos, adaptado para detectar inconsistências nos dados que só podem ser explicadas pela existência de participantes triplos.

A fórmula completa da união de três conjuntos é:
$$\text{Total Participantes} = (A + B + C) - (D + E + F) + (\text{A} \cap \text{B} \cap \text{C})$$

Onde $T = (\text{A} \cap \text{B} \cap \text{C})$ é o número de pessoas que praticam os três esportes.

Como sabemos que o número total de associados $N$ deve ser igual ao total de participantes mais o total de não participantes ($G$):
$$N = \text{Total Participantes} + G$$

Substituindo a fórmula da união e isolando $T$:
$$N = (A + B + C) - (D + E + F) + T + G$$
$$T = N + (D + E + F) - (A + B + C + G)$$

#### Condição Lógica Simplificada

Se houver alguém praticando os três esportes ($T > 0$), isso significa que a soma das contagens individuais excede o número total de slots disponíveis (o universo $N$ mais as contagens duplas que precisam ser "descontadas" duas vezes).

A condição lógica para verificar se $T > 0$ é:
$$(A + B + C + G) > (N + D + E + F)$$

Se essa condição for verdadeira, a resposta é **"S"** (existe $T > 0$). Caso contrário, a resposta é **"N"**.



[Image of Venn diagram with three intersecting sets]


**Código em JavaScript:**

```javascript
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split(/\s+/);

// Leitura das variaveis
var N = parseInt(lines[0]); // Total de Associados
var A = parseInt(lines[1]); // Tiro com arco
var B = parseInt(lines[2]); // Badminton
var C = parseInt(lines[3]); // Canoagem
var D = parseInt(lines[4]); // A e B
var E = parseInt(lines[5]); // A e C
var F = parseInt(lines[6]); // B e C
var G = parseInt(lines[7]); // Nenhum

// Logica de Conjuntos:
// Se a soma dos participantes individuais + nao participantes (A+B+C+G)
// excede o total ajustado (N + D+E+F), o excedente só pode ser o T (triplo).
if (A + B + C + G > N + D + E + F) {
    console.log("S");
} else {
    console.log("N");
}
```
