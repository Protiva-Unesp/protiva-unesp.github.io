---
title: "OBI Programação Nível 1 (2020)"
description: "Divisão do tesouro, Emoticons, Fissura Perigosa"
slug: "resolucao-2020-nivel1"
author: "Marcelo Henrique Ayala Gomes"
---
### Divisão do Tesouro

O Capitão Olho Roxo e seus marinheiros encontraram uma arca com uma grande quantidade de moedas de ouro idênticas. Para a divisão das moedas, todos concordaram com a seguinte sugestão do Capitão:

- cada marinheiro exceto o Capitão deveria receber exatamente o mesmo número de moedas; e
- o Capitão deveria receber o dobro de moedas que um marinheiro recebe. 

Pode ser que o fato de o Capitão ser o único com uma pistola a bordo tenha contribuído para a concordância de todos, mas também contribuiu o fato de que na forma proposta a divisão era perfeita, não sobrando ou faltando moedas.

Dados o número de moedas na arca e o número de marinheiros, escreva um programa para determinar quantas moedas o Capitão Olho Roxo recebeu.

### Entrada
A primeira linha da entrada contém um número inteiro A, o número de moedas na arca. A segunda linha contém um inteiro N, o número de marinheiros (não contando o Capitão).

### Saída
Seu programa deve produzir na saída uma única linha, contendo um único inteiro, o número de moedas que o Capitão Olho Roxo deve receber.
Restrições

- 3 ≤ A ≤ 10000
- 1 ≤ N ≤ 1000 

### Exemplos
#### Entrada
- 221
- 11

#### Saída
- 34

#### Entrada
- 1000
- 8

#### Saída
- 200

#### Entrada
- 3
- 1

#### Saída
- 2

### Resposta
```python
A = int(input().strip())
N = int(input().strip())

# cada marinheiro recebe x, o capitão recebe 2x, total: (N + 2) * x = A
capitao = 2 * A // (N + 2)

print(capitao)
```

### Emoticons

Emoticons são símbolos usados para expressar o sentimento de quem escreve uma mensagem. Scott Fahlman, um professor de uma universidade americana, foi o primeiro a propor o uso das sequências de caracteres :-) e :-(, que viraram respectivamente símbolos para "divertido" e "chateado".

Vamos definir o sentimento expresso em uma mensagem como sendo:

- neutro: se o número de símbolos "divertido" é igual ao número de símbolos "chateado";
- divertido: se o número de símbolos "divertido" é maior do que número de símbolos "chateado";
- chateado: se o número de símbolos "chateado" é maior do que número de símbolos "divertido"; 

Dada uma mensagem composta por uma cadeia de caracteres, escreva um programa para determinar o sentimento expresso na mensagem.

### Entrada
A primeira e única linha da entrada contém a mensagem M como uma cadeia de caracteres.

### Saída
Seu programa deve produzir uma única linha, contendo uma única palavra, o sentimento expresso na mensagem da entrada.
Restrições

- 3 ≤ comprimento de M ≤ 280
- M é composta por letras não acentuadas, espaços em branco e os caracteres `(' (abre parênteses), `)' (fecha parênteses), `:' (dois-pontos), `-' (hífen), `.' (ponto) e `,' (vírgula). 

#### Informações sobre a pontuação
Para um conjunto de casos de testes valendo 25 pontos, há no máximo um emoticon na mensagem. 

### Exemplos
#### Entrada
Espero que esteja tudo bem :-)

#### Saída
divertido
	
#### Entrada
Achei o filme muito divertido.

#### Saída
neutro

#### Entrada
:-):-(:-(:-)

#### Saída
neutro

### Resposta
```python
s = input()

happy = 0
sad = 0

for i in range(len(s) - 2):
    trip = s[i:i+3]
    if trip == ':-)':
        happy += 1
    elif trip == ':-(':
        sad += 1

if happy == sad:
    print('neutro')
elif happy > sad:
    print('divertido')
else:
    print('chateado')
```

### Fissura Perigosa

A erupção do vulcão Kilauea em 2018 no Havaí atraiu a atenção de todo o mundo. Inicialmente a força da erupção era menor e a lava avançou para o sul com relativamente poucos danos. Após algumas semanas, porém, a fissura 8 começou a jorrar com mais força e a lava avançou também para o norte trazendo muita destruição.

Você está ajudando na implementação de um sistema para simular a área por onde a lava avançaria, em função da força da erupção. O mapa será representado simplificadamente por uma matriz quadrada de caracteres, de 1 a 9, indicando a altitude do terreno em cada posição da matriz. Vamos considerar que a fissura 8, por onde a erupção se inicia, está sempre na posição do canto superior esquerdo da matriz. Dada a força da erupção, que será um valor inteiro, de 0 a 9, seu programa deve imprimir a matriz de caracteres representando o avanço final da lava. Se a lava consegue invadir uma posição da matriz, o caractere naquela posição deve ser trocado por um asterisco ('*'). Uma posição será invadida pela lava se seu valor for menor ou igual à força da erupção e

- for a posição inicial; ou
- estiver adjacente, ortogonalmente (abaixo, acima, à esquerda ou à direita), a uma posição invadida. 

A figura abaixo mostra um exemplo de mapa e o avanço final da lava para quatro forças de erupção: 1, 3, 6 e 8, respectivamente da esquerda para a direita. 

| - | - | - | - |
|27755478     |*7755478     |*7755478     |********| 
|29985439     |*9985439     |*9985439     |*99****9|
|34899989     |*4899989     |**899989     |***999*9|
|22115569     |****5569     |*******9     |*******9|
|66736689     |667*6689     |**7***89     |*******9|
|99886555     |99886555     |9988****     |99******|
|44433399     |44433399     |******99     |******99|
|99986991     |99986991     |9998*991     |999**991|

### Entrada
A primeira linha da entrada contém dois inteiros N e F representando, respectivamente o número de linhas (que é igual ao de colunas) da matriz e a força da erupção. Cada uma das N linhas seguintes contém uma string de N caracteres, entre 1 e 9, indicando o mapa de entrada.

### Saída
Seu programa deve imprimir N linhas contendo, cada uma, N caracteres representando o avanço final da lava de acordo com o enunciado.
Restrições

- 1 ≤ N ≤ 500
- 0 ≤ F ≤ 9 

### Informações sobre a pontuação

- Em um conjunto de casos de teste somando 20 pontos, N ≤ 10.
- Em um conjunto de casos de teste somando 20 pontos, 10 < N ≤ 100.
- Em um conjunto de casos de teste somando 60 pontos, nenhuma restrição adicional. 

### Exemplos
#### Entrada
- 8 6
- 27755478
- 29985439
- 34899989
- 22115569
- 66736689
- 99886555
- 44433399
- 99986991

#### Saída
- *7755478
- *9985439
- **899989
- *******9
- **7***89
- 9988****
- ******99
- 9998*991

#### Entrada
- 5 4
- 25679
- 35234
- 17182
- 39993
- 11223

#### Saída
- *5679
- *5***
- *7*8*
- *999*
- *****

#### Entrada
- 2 8
- 91
- 11

#### Saída
- 91
- 11

### Resposta
```python
# Leitura
N, F = map(int, input().split())
grid = [list(input().strip()) for _ in range(N)]

# Função que verifica se um valor do grid pode ser invadido
def pode_invadir(r, c):
    return int(grid[r][c]) <= F

# Usa uma fila implementada com lista + ponteiro (evita pop(0) lento)
q = []
q_idx = 0

# inicia pela posição (0,0) somente se ela for invadível
if pode_invadir(0, 0):
    grid[0][0] = '*'
    q.append((0, 0))

# direções ortogonais: cima, baixo, esquerda, direita
dirs = [(-1,0),(1,0),(0,-1),(0,1)]

while q_idx < len(q):
    r, c = q[q_idx]
    q_idx += 1

    for dr, dc in dirs:
        nr, nc = r + dr, c + dc
        if 0 <= nr < N and 0 <= nc < N and grid[nr][nc] != '*':
            if pode_invadir(nr, nc):
                grid[nr][nc] = '*'
                q.append((nr, nc))

# impressão do resultado
for row in grid:
    print(''.join(row))
```
