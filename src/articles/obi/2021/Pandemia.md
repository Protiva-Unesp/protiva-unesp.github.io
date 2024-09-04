# Pandemia (OBI 2021 - Fase I)

Numa epidemia por um novo tipo de vírus, uma das tarefas mais importantes dos
médicos infectologistas é determinar quem foi o Paciente Zero, ou seja, a pessoa
que foi infectada primeiro pelo novo vírus. O Paciente Zero geralmente é infectado
por um animal (morcego, por exemplo). Dizemos que a pessoa X foi infectada
diretamente pela pessoa Y quando X teve contato com Y. Dizemos que X foi
infectada indiretamente por Y quando X não teve contato com Y, mas teve contato
com uma pessoa que Y infectou, direta ou indiretamente. Numa recente epidemia
no reino da Nlogônia, os médicos determinaram que:

- Rui foi infectado diretamente por Luís.
- Saulo infectou diretamente Tânia.
- Luís infectou diretamente Pedro e Rui.
- Maria foi infectada diretamente por Saulo.
- Saulo foi infectado diretamente por Luís.
- Nara infectou diretamente Luís.

**Questão 1.** Qual das alternativas seguintes é a pessoa que foi o Paciente Zero?

- ( ) Pedro
- ( ) Maria
- ( ) Luís
- (X) Nara
- ( ) Saulo

**Resolução:**

Para encontrarmos o Paciente Zero devemos chegar na pessoa que não foi
infectada por nenhuma outra, assim podemos utilizar as determinações médicas
para descartarmos as opções. Segue deduções de descarte:

Determinação 1: Rui foi infectado diretamente por Luís. O Rui, não é uma opção,
assim seguimos para a próxima condição.

Determinação 2: Saulo infectou diretamente Tânia. A Tânia, também não é uma
opção, assim seguimos para a próxima condição.

Determinação 3: Luís infectou diretamente Pedro e Rui. Com essa condição,
conseguimos descartar o Pedro, já que ele foi infectado por outra pessoa.

Determinação 4: Maria foi infectada diretamente por Saulo. Com essa condição,
conseguimos descartar a Maria, já que ele foi infectado por outra pessoa.

Determinação 5: Saulo foi infectado diretamente por Luís. Com essa condição,
conseguimos descartar o Saulo, já que ele foi infectado por outra pessoa.

Na última determinação, temos a seguinte afirmação “Nara infectou diretamente
Luís.”, assim, podemos descartar o Luís e afirmar que Nara é a Paciente Zero, já
que a mesma é a única opção restante e não tem nenhuma determinação médica
que refute essa dedução.

**Questão 2.** Qual das alternativas seguintes é a pessoa que infectou diretamente o
maior número de pessoas?

- (X) Luís
- ( ) Pedro
- ( ) Maria
- ( ) Tânia
- ( ) Nara

**Resolução:**
Verificando as determinações médicas, podemos dizer que o Luís é a pessoa que
mais infectou pessoas diretamente. O mesmo infectou 3 pessoas, já Saulo infectou
2 e Nara infectou somente 1.
