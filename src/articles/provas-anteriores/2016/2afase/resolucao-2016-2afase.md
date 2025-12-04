---
title: "OBI - Modalidade Programação (Nível 1) - Fase 2 - 2016"
description: "Tacos de Bilhar"
slug: "resolucao-nivel-2-2016"
author: "Dayna Prado"
---
### Tacos de Bilhar

Jogos de bilhar, em que tacos são usados para arremessar uma bola contra outras em uma mesa, têm muitas variantes, como sinuca, mata-mata, bilhar francês e outras. O Sr. Jorge é um renomado artesão que fabrica tacos de bilhar sob encomenda.

Cada vez que um cliente pede um taco de um dado comprimento, o Sr. Jorge primeiro verifica se ele tem um taco com esse comprimento no estoque.

* **Se tem:** ele envia o taco para o cliente.
* **Se não tem:** ele faz duas cópias do taco, envia uma para o cliente e guarda a outra no estoque.

Assim, ele nunca tem no estoque mais do que um taco com um determinado comprimento. O estoque do Sr. Jorge está muito grande, e ele tem perdido muito tempo procurando por tacos. Ele pensa em usar um sistema computadorizado para manter o seu estoque de tacos.

**Objetivo**

Dadas as consultas ao estoque, calcule o número total de tacos fabricados, supondo que inicialmente o estoque esteja vazio.

**Entrada**

A primeira linha da entrada contém um inteiro C que indica o número de consultas ao estoque. A segunda linha contém C números inteiros, indicando as consultas ao estoque. Cada valor de consulta indica o comprimento de um taco desejado.

**Saída**

Seu programa deverá imprimir um único número, o número de tacos fabricados.

**Restrições**

* 1 ≤ C ≤ 10^5
* 1 ≤ comprimento dos tacos ≤ 10^6

**Informações sobre a pontuação**

Em um conjunto de casos de teste equivalente a 40 pontos, C ≤ 1000.

**Exemplos**

| Entrada | Saída |
| :--- | :--- |
| 4<br>80 100 80 50 | 6 |
| 1<br>1000 | 2 |

### Solução

Para resolver este problema de forma eficiente, utilizamos a estrutura de dados **Set (Conjunto)**. O enunciado garante que o estoque nunca terá mais de um taco do mesmo comprimento, funcionando como um interruptor: ou tem (1), ou não tem (0).

A lógica aplicada é:

1. Lemos o comprimento solicitado.
2. Verificamos se esse comprimento existe no Set de estoque.
3. **Se existe:** O Sr. Jorge usa o item do estoque. Removemos o item do Set (estoque volta a zero para esse tamanho).
4. **Se não existe:** O Sr. Jorge precisa fabricar. Ele faz 2 unidades. Somamos 2 ao total de tacos fabricados e adicionamos o tamanho ao Set (pois uma unidade fica guardada).

Essa abordagem garante complexidade O(C), o que é ideal dado que C pode chegar a 10^5.

**Código em JavaScript:**

```javascript
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split(/\s+/);

// lines[0] eh o numero de consultas C
var C = parseInt(lines[0]);

// Usamos um Set para representar o estoque
// O Set armazena apenas valores unicos
var estoque = new Set();
var fabricados = 0;

// Percorre todas as consultas (comecando do indice 1)
for (var i = 1; i <= C; i++) {
    var pedido = parseInt(lines[i]);

    if (estoque.has(pedido)) {
        // Se tem no estoque, vende (remove do estoque)
        estoque.delete(pedido);
    } else {
        // Se nao tem, fabrica 2
        fabricados += 2;
        // Vende um e guarda o outro no estoque
        estoque.add(pedido);
    }
}

console.log(fabricados);
```
