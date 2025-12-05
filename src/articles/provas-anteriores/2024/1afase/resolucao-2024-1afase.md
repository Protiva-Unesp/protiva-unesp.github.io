---
title: "OBI (Nível Júnior) - Fase 1 - 2024"
description: "OBI nível júnior 2024"
slug: "resolucao-2024-fase-1"
author: "Miguel Morais Silva Varella"
---
1 Tarefa 1: Ogro
1.1 identificação do Problema
Arquivo: ogro.cpp
Objetivo: Determinar o resultado de uma brincadeira matemática entre o Ogro e o Bicho-papão,
baseada no número de dedos mostrados nas mãos esquerda (E) e direita (D).
1.2 Análise Lógica
O problema define duas regras condicionais claras para calcular o resultado:
1. Caso 1 (E > D): Se o número de dedos na mão esquerda for maior que na direita, o resultado
é a soma dos dois números:

Resultado = E + D

2. Caso 2 (E ≤ D): Caso contrário (ou seja, esquerda menor ou igual à direita), o resultado é o
dobro da diferença entre a direita e a esquerda:

Resultado = 2 × (D − E)

As restrições indicam que E e D são números inteiros representando dedos de uma mão, variando
tipicamente de 0 a 5.

1.3 Implementação (C++)

```c++
# include < iostream >

using namespace std ;

int main () {
int E , D ;

// Leitura dos valores da mao esquerda e direita
if ( cin >> E >> D) {

// Verifica a condicao do problema
if (E > D) {
// Regra 1: Soma
cout << (E + D) << endl ;
} else {
// Regra 2: Dobro da diferenca ( Direita - Esquerda )
cout << 2 * (D - E) << endl ;
}
}
return 0;
}
```

1.4 Complexidade
• Tempo: O(1) - Apenas operações aritméticas básicas e uma condicional.
• Espaço: O(1) - Apenas duas variáveis armazenadas.

2 Tarefa 2: Concurso
2.1 Identificação do Problema
Arquivo: concurso.cpp
Objetivo: Encontrar a maior nota de corte C possível de modo que pelo menos K candidatos sejam
aprovados, dado um conjunto de N notas.
2.2 Análise Lógica
Temos N candidatos e suas respectivas notas. Queremos aprovar os K melhores, mas a nota de corte
deve ser tal que inclua esses K candidatos.
Se ordenarmos as notas em ordem decrescente (da maior para a menor):

A1, A2, A3, . . . , AK, . . . , AN

Os primeiros K candidatos (índices 0 a K −1 em um vetor 0-indexado) são os que têm as maiores
notas. Para garantir que pelo menos esses K candidatos entrem, a nota de corte deve ser igual à
nota do K-ésimo candidato na lista ordenada.
Por que o K-ésimo?
• Se a nota de corte for maior que AK, menos de K pessoas passarão.
• Se a nota de corte for igual a AK, então A1 ≥ A2 ≥ · · · ≥ AK. Todos esses K candidatos têm
nota maior ou igual à nota de corte e serão aprovados.
• O problema pede a maior nota de corte possível. Qualquer nota menor que AK também
aprovaria os K candidatos, mas AK é o limite superior que satisfaz a condição "pelo menos K
aprovados".
2.3 Implementação (C++)

```c++
# include < iostream >
2 # include < vector >
3 # include < algorithm > // Para sort e greater
4
5 using namespace std ;
6
7 int main () {
8 int N , K ;
9
10 if ( cin >> N >> K) {
11 vector <int > notas (N) ;
12
13 // Leitura das N notas
14 for ( int i = 0; i < N; i ++) {
15 cin >> notas [ i ];
16 }
17
18 // Ordena as notas em ordem decrescente ( maior para menor )
19 // Usamos greater <int >() para inverter a ordem padrao
20 sort ( notas . begin () , notas . end () , greater <int >() ) ;
21
22 // A nota de corte eh a nota do K- esimo candidato
23 // Como o vetor comeca em 0 , o K- esimo esta no indice K -1
24 cout << notas [K -1] << endl ;
25 }
26 return 0;
27 }
```

2.4 Complexidade
• Tempo: O(N log N) devido à ordenação das notas. Como N ≤ 500, isso é extremamente
rápido.
• Espaço: O(N) para armazenar o vetor de notas.

3 Tarefa 3: Bactérias
3.1 Identificação do Problema
Arquivo: bacterias.cpp
Objetivo: Calcular quantos dias uma colônia de bactérias pode se reproduzir (multiplicando-se por
um fator P) sem exceder a capacidade N do recipiente.
3.2 Análise Lógica
O crescimento é exponencial. Começamos com 1 bactéria no dia 0.
• Dia 0: 1
• Dia 1: 1 × P
• Dia 2: 1 × P × P = P
2

• Dia d: P
d

Devemos encontrar o maior d tal que:
P
d ≤ N

Podemos simular o processo dia a dia usando um laço de repetição. A cada passo, multiplicamos
a quantidade atual por P. Se o resultado da multiplicação for maior que N, paramos. Caso contrário,
incrementamos o contador de dias.
Atenção: O problema pergunta quantos dias podemos deixar se reproduzindo. Se no próximo
dia exceder a capacidade, não contamos esse dia.
Exemplo Lógico (N = 30, P = 2):
• Início: 1 bactéria. (Dia 0)
• Fim do Dia 1: 1 × 2 = 2 (2 ≤ 30, OK). Contamos 1 dia.
• Fim do Dia 2: 2 × 2 = 4 (4 ≤ 30, OK). Contamos 2 dias.
• Fim do Dia 3: 4 × 2 = 8 (8 ≤ 30, OK). Contamos 3 dias.
• Fim do Dia 4: 8 × 2 = 16 (16 ≤ 30, OK). Contamos 4 dias.
• Tentativa Dia 5: 16 × 2 = 32 (32 > 30, Falha).
• Resultado: 4 dias.

3.3 Implementação (C++)

```c++
# include < iostream >

using namespace std ;

int main () {
int N , P ;

// N: Capacidade , P: Fator de multiplicacao
if ( cin >> N >> P) {
int dias = 0;
int quantidade = 1; // Comeca com 1 bacteria

// Enquanto o proximo estagio de reproducao couber no recipiente
// Verifica se quantidade * P ainda eh menor ou igual a N
while ( quantidade * P <= N) {
quantidade = quantidade * P;
dias ++;
}

cout << dias << endl ;
}
return 0;
}
```

3.4 Complexidade
• Tempo: O(logP N). Como estamos multiplicando por P a cada passo, o número de iterações
cresce logaritmicamente em relação a N. Dado N ≤ 30.000, o loop roda pouquíssimas vezes.
• Espaço: O(1).
