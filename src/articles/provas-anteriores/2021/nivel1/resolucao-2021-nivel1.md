---
title: "OBI Programação Nível 1 (2021)"
description: "Tempo de resposta, Torneio de tênis, Zero para cancelar" 
slug: "resolucao-2021-nivel1"
author: "Marcelo Henrique Ayala Gomes"
---
## Tempo de resposta (OBI - 2021 - Nível 1)
Sara adora trocar mensagens com amigos. Como ela recebe e envia muitas mensagens, está preocupada com o tempo que seus amigos esperam para receber respostas das mensagens.

As seguintes regras de etiqueta são sempre obedecidas:

- as únicas mensagens que Sara envia são respostas a mensagens que ela recebeu.
- Sara envia no máximo uma mensagem como reposta a uma mensagem que recebeu.
- um amigo de Sara nunca envia uma nova mensagem para Sara até que tenha recebido resposta da mensagem que enviou anteriormente. 

O aplicativo de mensagens que Sara e seus amigos usam recebe e envia mensagens instantaneamente. O envio e o recebimento de mensagens são chamados de eventos. O aplicativo registra cada evento na ordem em que os eventos ocorrem, usando dois tipos de registro:

- R X indica que uma mensagem foi recebida do amigo X.
- E X indica que uma mensagem foi enviada ao amigo X. 

O aplicativo usa ainda um outro tipo de registro, para indicar o tempo que se passou entre dois eventos consecutivos, na forma

- T X indicando que X segundos se passaram entre o evento anterior e o evento posterior a esse registro. 

Se não há registro do tipo T X entre dois registros de eventos consecutivos significa que exatamente 1 segundo se passou entre esses dois eventos.

O Tempo de Resposta de uma mensagem é o tempo que se passa entre o recebimento da mensagem por Sara e o envio da resposta a essa mensagem por Sara. Se um amigo recebeu respostas para todas as suas mensagens, o Tempo de Resposta Total para esse amigo é a soma dos Tempos de Respostas para as mensagens desse amigo; caso contrário o Tempo de Resposta Total para esse amigo é -1.

Dada a lista de registros do aplicativo de Sara, sua tarefa é determinar o Tempo de Resposta Total para cada amigo.
Entrada

A primeira linha da entrada contém um inteiro N, o número de registros. Os amigos de Sara são identificados por números inteiros. Cada uma das N linhas seguintes descreve um registro e contém um caractere (R, E ou T) seguido de um número inteiro X. No caso de registros dos tipos R e E o valor de X indica um amigo de Sara; no caso do registro de tipo T, o valor de X indica o número de segundos que se passaram entre o evento anterior e o posterior.
Saída

Para cada amigo de Sara seu programa deve produzir uma linha na saída contendo dois inteiros: o número do amigo e o Tempo de Resposta Total para esse amigo, em ordem crescente dos números dos amigos.
Restrições

    - 1 ≤ N ≤ 20
    - 1 ≤ X ≤ 100 

Informações sobre a pontuação

    - Para um conjunto de casos de testes valendo 20 pontos, 1 ≤ N ≤ 10.
    - Para um conjunto de casos de testes valendo 80 pontos, nenhuma restrição adicional.

#### Exemplos

#### Entrada
- 5
- R 2
- R 3
- T 5
- E 2
- E 3

#### Saída
- 2 6
- 3 6

#### Entrada
- 14
- R 12
- T 2
- R 23
- T 3
- R 45
- E 45
- R 45
- E 23
- R 23
- T 2
- E 23
- R 34
- E 12
- E 34

#### Saída
- 12 13
- 23 8
- 34 2
- 45 -1

### Resposta
```python
# Tempo de Resposta - correção
N = int(input())

records = [input().split() for _ in range(N)]

# coleciona todos os friends que aparecem (R ou E)
friends_set = set()
for tipo, x in records:
    if tipo in ('R', 'E'):
        friends_set.add(int(x))

# estruturas para controle
totais = {f: 0 for f in friends_set}   # soma dos tempos por amigo
pendente = {}  # amigo -> tempo_recebido se há mensagem sem resposta

last_event_time = 0
first_event = True
next_gap = 1  # intervalo (padrão) para o próximo evento

for tipo, xs in records:
    x = int(xs)
    if tipo == 'T':
        # define o intervalo que será usado entre o último evento e o próximo evento
        next_gap = x
    else:
        # calcula horário do evento atual
        if first_event:
            t = 0
            first_event = False
        else:
            t = last_event_time + next_gap

        # processa o evento
        if tipo == 'R':
            # registra recebimento (marca como pendente)
            pendente[x] = t
        else:  # tipo == 'E'
            if x in pendente:
                totais[x] += t - pendente[x]
                del pendente[x]
            else:
                # caso raro: E sem R prévio — mantemos total 0 (seguindo comportamento seguro)
                pass

        # atualiza controle de tempo
        last_event_time = t
        next_gap = 1  # volta ao padrão entre eventos
       
# impressão em ordem crescente dos amigos que apareceram
for amigo in sorted(friends_set):
    if amigo in pendente:
        print(f"{amigo} -1")
    else:
        print(f"{amigo} {totais[amigo]}")
```

## Torneio de tênis (OBI - 2021 - Nível 1)
A prefeitura contratou um novo professor para ensinar as crianças do bairro a jogar tênis na quadra de tênis do parque municipal. O professor convidou todas as crianças do bairro interessadas em aprender a jogar tênis. Ao final do primeiro mês de aulas e treinamentos foi organizado um torneio em que cada participante disputou exatamente seis jogos. O professor vai usar o desempenho no torneio para separar as crianças em três grupos, de forma a ter grupos de treino em que os participantes tenham habilidades mais ou menos iguais, usando o seguinte critério:

- participantes que venceram 5 ou 6 jogos serão colocados no Grupo 1;
- participantes que venceram 3 ou 4 jogos serão colocados no Grupo 2;
- participantes que venceram 1 ou 2 jogos serão colocados no Grupo 3;
- participantes que não venceram nenhum jogo não serão convidados a continuar com os treinamentos. 

Dada uma lista com o resultado dos jogos de um participante, escreva um programa para determinar em qual grupo ele será colocado.

### Entrada
A entrada consiste de seis linhas, cada linha indicando o resultado de um jogo do participante. Cada linha contém um único caractere: V se o participante venceu o jogo, ou P se o jogador perdeu o jogo. Não há empates nos jogos.

### Saída
Seu programa deve produzir uma única linha na saída, contendo um único inteiro, identificando o grupo em que o participante será colocado. Se o participante não for colocado em nenhum dos três grupos seu programa deve imprimir o valor -1.

### Exemplos

#### Entrada
- V
- V
- P
- P
- P
- V

#### Saída
- 2

#### Entrada
- P
- P
- P
- P
- P
- P

#### Saída
- -1

#### Resposta
```python
# Leitura de 6 resultados e contagem de vitórias
vitorias = 0
for _ in range(6):
    resultado = input().strip().upper()
    if resultado == 'V':
        vitorias += 1

# Decisão do grupo
if vitorias >= 5:
    print(1)
elif vitorias >= 3:
    print(2)
elif vitorias >= 1:
    print(3)
else:
    print(-1)
```

## Zero para cancelar (OBI - 2021 - Nível 1)
Seu chefe está ao telefone, nervoso. Ele quer que você compute a soma de uma sequência de números que ele vai falar para você ao telefone, para saber o total das vendas em sua mais recente viagem de negócios.

Infelizmente, de vez em quando seu chefe fala números errados para você ao telefone.

Felizmente, seu chefe rapidamente percebe que falou um número errado e diz "zero", que como combinado previamente quer dizer ignore o último número corrente.

Infelizmente, seu chefe pode cometer erros repetidos, e diz "zero" para cada erro.

Por exemplo, seu chefe pode falar ao telefone "Um, três, cinco, quatro, zero, zero, sete, zero, zero, seis", o que significa uma soma total igual a 7, conforme explicado na tabela abaixo:

|Fala do chefe | Números correntes | Explicação |
| - | - | - |
|"um, três, cinco, quatro"|	1,3,5,4 | registre os quatro números |
|"zero, zero" |1, 3 |ignore os dois últimos números|
|"sete" 	 |1, 3, 7	|registre o sete ao final da lista|
|"zero, zero"|1 	    |ignore os dois últimos números|
|"seis" 	 |1, 6	    |registre seis ao final da lista|

Para não deixar seu chefe ainda mais nervoso, escreva um programa que determine a soma total dos números falados por seu chefe ao telefone.

#### Entrada
A primeira linha da entrada contém um inteiro N, a quantidade de números inteiros (incluindo os "zeros") que o seu chefe falou ao telefone. Cada uma das N linhas seguintes contém um número inteiro Xi.

#### Saída
Seu programa deve produzir uma única linha na saída, contendo um único inteiro, a soma correta dos números, levando em conta que o valor 0 significa erro, conforme descrito.
Restrições

- 1 ≤ N ≤ 100 000
- 0 ≤ Xi ≤ 100, para (1 ≤ i ≤ N)
- 0 ≤ resultado ≤ 1 000 000 

### Exemplos
#### Entrada
- 4
- 3
- 0
- 4
- 0

#### Saída
- 0

#### Entrada
- 10
- 1
- 3
- 5
- 4
- 0
- 0
- 7
- 0
- 0
- 6

#### Saída
- 7

### Resposta
```python
# Versão sem imports
N = int(input())
stack = []

for _ in range(N):
    x = int(input())
    if x == 0:
        if stack:
            stack.pop()
    else:
        stack.append(x)

print(sum(stack))
```
