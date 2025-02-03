---
title: "03 - Complexidade de Algoritmos"
description: "descricao"
slug: "complexidade-algoritmos"
author: "Pedro Henrique Paiola, Rene Pegoraro, Wilson M. Yonezawa"
---
### Introdução
- O que é um algoritmo?
- Objetivo: Encontrar e/ou projetar algoritmos eficientes para problemas computacionais
- Como projetar e avaliar um algoritmo? “Informalmente, um algoritmo é qualquer procedimento computacional bem definido que recebe algum valor, ou conjunto de valores, como entrada e produz algum valor, ou conjunto de valores, como saída. Um algoritmo é, portanto, uma sequência de passos computacionais que transformam a entrada na saída”. Tradução livre do livro “Introduction to Algorithms do Cormen, Leiserson, Rivest e Stein, 2009.

Algoritmo (exemplo de representação)
mdc(a, b)
- Etapa 1: Dados dos números inteiros a e b
- Etapa 2: R é o resto da divisão de a por b
- Etapa 3: Faça a = b e b = R
- Etapa 4: Repita as etapas 2 e 3 enquanto o
- resto de a dividido por b for maior que zero
- Etapa 5: mdc = b
- Etapa 6: Fim

## Eficiência de um algoritmo
- Tempo (de execução) e espaço (memória)
- Tempo de execução pode variar dependendo do computador
- Comportamento do algoritmo em função do tamanho da entrada de dados (n

## Exemplos de problemas
- Encontrar o maior elemento de uma lista de tamanho N
- Mostrar todos os pares ordenados de uma lista de tamanho N
- Ordenar uma lista com N números inteiros
- Encontrar um elemento em uma lista ordenada de tamanho N
- Permutar as letras de uma string de tamanho N
- 3-SAT, problema do caixeiro viajante, etc

## Big O
A notação Big O descreve a complexidade de uma função/algoritmo, seja seu tempo de execução (a quantidade de tempo que um algoritmo leva para completar sua tarefa) ou a complexidade do espaço (a quantidade de espaço que um algoritmo usa). É usado para ver quanto mais trabalho precisa ser feito por um algoritmo quando a entrada aumenta

| Complexidade do algoritmo | Terminologia |  
| ----------- | ----------- |  
| O(1)  | Complexidade constante |  
| O(log n) | Complexidade logarítmica |
| O(n) | Complexidade linear |
| O(n log n) | Complexidade n log n |
| O(n^b) | Complexidade polinomial |
| O(b^n ), b > 1 | Complexidade exponencial |
| O(n!) | Complexidade fatorial |

### Voltando aos Exemplos
- O(n) - Encontrar o maior elemento de uma lista de tamanho N
- O(n^2) - Mostrar todos os pares ordenados de uma lista de tamanho N
- O (log n) - Encontrar um elemento em uma lista ordenada de tamanho N
- O(n log n) - Ordenar uma lista com N números inteiros
- O(k^n) - 3-SAT, problema do caixeiro viajante, etc
- O(n!) - Permutar as letras de uma string de tamanho N

### Voltando aos Algoritmos
#### mdc(a, b)
Etapa 1: Dados dos números inteiros a e b
Etapa 2: R é o resto da divisão de a por b
Etapa 3: Faça a = b e b = R
Etapa 4: Repita as etapas 2 e 3 enquanto o
resto de a dividido por b for maior que zero
Etapa 5: mdc = b
Etapa 6: Fim

``` cpp
int mdc(int a,int b) {
    int R;
    while ((a % b) > 0) {
        R = a % b;
        a = b;
        b = R;
    }
    return b;
}
```

### Considerações finais
- Observar o problema e o tamanho da entrada (N)
- Procurar e/ou buscar projetar algoritmos com complexidade:
logarítmica O(log N), linear O(n), linear/logarítmica O(n log n),
polinomial O(n k ).
- Se a complexidade do problema é do tipo exponencial ou fatorial,
verificar se é possível reduzir para polinomial.
Problemas recursivos devem ser analisados com cuidado visto que,
geralmente, aumentam a complexidade do algoritmo.
