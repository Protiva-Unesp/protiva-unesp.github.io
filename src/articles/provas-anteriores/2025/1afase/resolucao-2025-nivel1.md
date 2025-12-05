---
title: "OBI (Nível Júnior) - Fase 1 - 2025"
description: "OBI nível júnior 2025"
slug: "resolucao-2025-fase-1"
author: "Miguel Morais Silva Varella"
---
1 Exercício 1: Pizzaria
1.1 Identificação do Problema
Nome da Tarefa: Pizzaria.
Objetivo: Calcular o número máximo de amigos que Larissa pode convidar para sua festa, dado o
número de pizzas compradas.
1.2 Análise dos Dados de Entrada
O problema fornece dois números inteiros como entrada:
• G: Quantidade de pizzas grandes pedidas pela mãe de Larissa.
• P: Quantidade de pizzas pequenas pedidas.
As restrições garantem que 1 < G < 10 e 1 ≤ P ≤ 10, o que permite o uso de tipos inteiros
padrões (como int) sem risco de overflow.
1.3 Lógica Matemática
Para resolver o problema, precisamos determinar o total de fatias disponíveis e subtrair as fatias
consumidas por Larissa e sua mãe.
1. Definição das Fatias:
• Uma pizza grande possui 8 fatias.
• Uma pizza pequena possui 4 fatias.
Portanto, o total de fatias (Stotal) é dado por:

Stotal = (G × 8) + (P × 4) (1)
2. Cálculo dos Convidados: O enunciado especifica que é necessário reservar uma fatia para
Larissa e uma para sua mãe. O restante das fatias será distribuído entre os amigos.
Logo, o número de fatias reservadas (Sres) é constante:

Sres = 2 (2)
O número de amigos (Namigos) é calculado subtraindo-se as fatias reservadas do total:
Namigos = Stotal − Sres (3)

Substituindo a equação (1) na equação (3):

Namigos = (G × 8) + (P × 4) − 2 (4)

1.4 Teste de Mesa (Baseado no Exemplo 1)
Vamos verificar a fórmula utilizando o primeiro exemplo fornecido na prova.
Entrada:

G = 2, P = 3

Processamento:

Namigos = (2 × 8) + (3 × 4) − 2
Namigos = 16 + 12 − 2
Namigos = 28 − 2
Namigos = 26

Saída Esperada: 26.
1.5 Complexidade do Algoritmo
• Complexidade de Tempo: O(1) - A solução envolve apenas operações aritméticas básicas.
• Complexidade de Espaço: O(1) - São armazenadas apenas três variáveis inteiras.
1.6 Implementação Sugerida (C++)
Abaixo, um exemplo de implementação seguindo as boas práticas para competições.

```c++
include < iostream >

using namespace std ;

int main () {
// Declaracao das variaveis
int G , P ;

// Leitura da entrada padrao
if ( cin >> G >> P) {

// Calculo : ( Grandes * 8) + ( Pequenas * 4) - 2
int total_amigos = (G * 8) + (P * 4) - 2;

// Saida do resultado
cout << total_amigos << endl ;
}

return 0;
}
```

2 Exercício 2: Café com Leite

2.1 Identificação do Problema
Nome da Tarefa: Café com Leite.
Objetivo: Determinar se a quantidade de leite adicionada à xícara atende aos limites mínimo e
máximo de preferência do cliente.
2.2 Análise dos Dados de Entrada
O problema fornece quatro números inteiros, um por linha:
• A: Volume mínimo de leite desejado (limite inferior).
• B: Volume máximo de leite desejado (limite superior).
• C: Capacidade total da xícara.
• D: Volume de café que a máquina prepara (fixo).
2.3 Lógica Matemática
A preparação da bebida segue dois passos lógicos:
1. Cálculo do volume de leite (Vleite): A xícara é preenchida completamente. Como a máquina
coloca D ml de café, o restante do espaço na xícara (C) será ocupado pelo leite.

Vleite = C − D (5)
2. Verificação da preferência: Precisamos verificar se o volume de leite calculado está dentro
do intervalo fechado [A, B] definido pelo cliente.
A condição para satisfazer o cliente é:

A ≤ Vleite ≤ B (6)

Ou, em termos de lógica de programação:

(Vleite ≥ A) E (Vleite ≤ B)

2.4 Saída
• Se a condição for verdadeira, imprimir ’S’.
• Caso contrário, imprimir ’N’.

2.5 Teste de Mesa (Baseado no Exemplo 1)
Vamos verificar a lógica com os dados do primeiro exemplo.
Entrada:

A = 130, B = 150, C = 170, D = 30

Processamento: 1. Calcular volume de leite:

Vleite = 170 − 30 = 140

2. Verificar intervalo:

130 ≤ 140 ≤ 150
130 ≤ 140 (Verdadeiro)
140 ≤ 150 (Verdadeiro)
Resultado: Como ambas as condições são verdadeiras, a saída é S.
2.6 Teste de Mesa (Baseado no Exemplo 2)
Dados do segundo exemplo:

A = 220, B = 230, C = 240, D = 30

Processamento: 1. Calcular volume de leite:

Vleite = 240 − 30 = 210

2. Verificar intervalo:

220 ≤ 210 ≤ 230
220 ≤ 210 (Falso)

Resultado: Como o volume está abaixo do mínimo, a saída é N.
2.7 Complexidade
• Tempo: O(1) - Apenas subtrações e comparações simples.
• Espaço: O(1) - Armazenamento de apenas 5 variáveis inteiras.

2.8 Implementação Sugerida (C++)

```c++
# include < iostream >

using namespace std ;

int main () {
// Declaracao das variaveis
int A , B , C , D ;

// Leitura dos dados de entrada
// A e B: limites min e max de leite
// C: capacidade da xicara
// D: quantidade de cafe
if ( cin >> A >> B >> C >> D) {

// Passo 1: Calcular quanto leite foi colocado
int volume_leite = C - D;

// Passo 2: Verificar se esta dentro do intervalo [A, B]
if ( volume_leite >= A && volume_leite <= B ) {
cout << "S" << endl ;
} else {
cout << "N" << endl ;
}
}

return 0;
}
```

3 Exercício 3: Dieta
3.1 Identificação do Problema
Nome da Tarefa: Dieta.
Objetivo: Calcular quantas calorias o gato Garfield ainda pode consumir no dia, dado um limite
diário e uma lista de refeições já realizadas.
3.2 Análise dos Dados de Entrada
A entrada começa com dois números inteiros:
• N: A quantidade de refeições já registradas.
• M: O limite máximo de calorias diárias.

Em seguida, existem N linhas, onde cada linha representa uma refeição com três valores nutrici-
onais (em gramas):

• P: Proteínas.
• G: Gorduras.
• C: Carboidratos.
3.3 Lógica Matemática
Para resolver o problema, precisamos converter os macronutrientes de cada refeição em calorias totais
e subtrair esse valor do limite diário M.
1. Conversão de Nutrientes: O enunciado fornece os seguintes valores calóricos por grama:
• 1g de Proteína = 4 calorias
• 1g de Gordura = 9 calorias
• 1g de Carboidrato = 4 calorias
A caloria total de uma única refeição (Kref ) é dada por:

Kref = (P × 4) + (G × 9) + (C × 4) (7)
2. Cálculo do Consumo Total: Devemos somar as calorias de todas as N refeições para obter
o total consumido (Ktotal):

Ktotal =
X
N
i=1
Krefi

(8)
3. Cálculo do Saldo Restante: Finalmente, o quanto ainda pode ser consumido (Krestante) é a
diferença entre o limite e o total consumido:

Krestante = M − Ktotal (9)

3.4 Teste de Mesa (Baseado no Exemplo 1)
Entrada:

N = 3, M = 2000
Refeições: 1. 65g, 15g, 20g 2. 40g, 20g, 25g 3. 50g, 10g, 35g
Processamento:
• Refeição 1: (65 × 4) + (15 × 9) + (20 × 4) = 260 + 135 + 80 = 475 cal.
• Refeição 2: (40 × 4) + (20 × 9) + (25 × 4) = 160 + 180 + 100 = 440 cal.
• Refeição 3: (50 × 4) + (10 × 9) + (35 × 4) = 200 + 90 + 140 = 430 cal.
Ktotal = 475 + 440 + 430 = 1345 calorias
Krestante = 2000 − 1345 = 655 calorias

Saída Esperada: 655.
3.5 Complexidade
• Tempo: O(N) - O algoritmo itera uma vez por cada refeição listada.
• Espaço: O(1) - Armazenamos apenas acumuladores, sem necessidade de guardar vetores.
3.6 Implementação Sugerida (C++)

```c++
# include < iostream >

using namespace std ;

int main () {
int N , M ;

// Leitura da primeira linha : N refeicoes e Meta M
if ( cin >> N >> M) {

int total_consumido = 0;

// Loop para ler as N refeicoes
for ( int i = 0; i < N; i ++) {
int P , G , C ;
cin >> P >> G >> C ;

// Calculo calorico da refeicao atual
int caloria_refeicao = ( P * 4) + ( G * 9) + (C * 4) ;

// Soma ao acumulador total
total_consumido += caloria_refeicao ;
}

// Calculo final e impressao
int restante = M - total_consumido ;
cout << restante << endl ;
}

return 0;
}

```
