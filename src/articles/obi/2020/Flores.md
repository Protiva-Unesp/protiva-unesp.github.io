# Flores (OBI 2020 - Fase I)
Uma floricultura está vendendo arranjos de rosas para o Dia das Mães. Há cinco
arranjos, um de cada uma das seguintes cores: laranja, rosa, vermelha, branca e
amarela. Os arranjos são vendidos um por vez, de acordo com as seguintes
restrições:
- O arranjo rosa é o primeiro, o terceiro ou o quinto a ser vendido.
- Pelo menos dois arranjos são vendidos após arranjo branco ser vendido.
- O arranjo amarelo é vendido após o arranjo laranja, com exatamente um
arranjo sendo vendido entre o laranja e o amarelo.

**Questão 1.** Qual das seguintes alternativas é uma ordem correta em que os
arranjos foram vendidos, do primeiro ao último?

- ( ) rosa, amarela, laranja, vermelha, branca
- ( ) branca, amarela, rosa, laranja, vermelha
- ( ) branca, rosa, amarela, laranja, vermelha
- (X) vermelha, laranja, branca, amarela, rosa
- ( ) rosa, laranja, vermelha, amarela, branca

**Resolução:**

Seguindo as restrições apresentadas, podemos descartar as opções até que
somente sobre a correta! Vamos lá:
- Restrição 1: O arranjo rosa é o primeiro, o terceiro ou o quinto a ser vendido. Assim,
podemos descartar a 3° opção, já que o rosa não pode ser o segundo a ser vendido.
- Restrição 2: Pelo menos dois arranjos são vendidos após arranjo branco ser
vendido. Nesse caso, podemos descartar a primeira e a última opção, já que o
branco não pode ocupar a última posição, pois assim não teremos 2 vendas após o
mesmo.
- Restrição 3: O arranjo amarelo é vendido após o arranjo laranja, com exatamente
um arranjo sendo vendido entre o laranja e o amarelo. Com essa condição,
conseguimos descartar a segunda opção, já que na mesma o amarelo vem antes do
laranja.

Com esses descartes, já conseguimos definir que a opção correta é a 4°.

**Questão 2.** Se o arranjo branco é o terceiro a ser vendido, qual das seguintes
alternativas é sempre verdadeira?

- (X) O arranjo laranja é o segundo a ser vendido.
- ( ) O arranjo rosa é o primeiro a ser vendido.
- ( ) O arranjo rosa é o quinto a ser vendido.
- ( ) O arranjo laranja é o primeiro a ser vendido.
- ( ) O arranjo amarelo é o último a ser vendido.

**Resolução:**

Utilizando a restrição 3 que afirma que “o arranjo amarelo é vendido após o arranjo
laranja, com exatamente um arranjo sendo vendido entre o laranja e o amarelo.”
podemos descartar a 4° opção, pois se o laranja fosse o 1° o amarelo teria que ser o
3° e essa posição já é do branco. Além disso, podemos descartar a última opção,
pois para o amarelo ser o último a ser vendido o laranja teria que ocupar a 3°
posição, já destinada ao branco.
Para fazer o próximo descarte, devemos levar em consideração a afirmação
**sempre verdadeira**. Como o rosa pode ocupar o 1° e o 5° lugar sem nenhum
problema, podemos descartar as 2 opções, pois quando o rosa estiver em 1° a
opção de que ele está no quinto é falsa e vice-versa.
Com esses descartes, já conseguimos definir que a opção correta é a 1°, pois a
única posição que o laranja pode estar é ser o segundo vendido.

**Questão 3.** Se o arranjo vermelho é vendido imediatamente depois do arranjo
amarelo, qual das seguintes alternativas é sempre falsa?

- ( ) O arranjo laranja é o primeiro a ser vendido.
- ( ) O arranjo branco é o segundo a ser vendido.
- (X) O arranjo laranja é o terceiro a ser vendido.
- ( ) O arranjo vermelho é o quinto a ser vendido.
- ( ) O arranjo vermelho é o quarto a ser vendido.

**Resolução:**
Utilizando a restrição 3 que afirma que “o arranjo amarelo é vendido após o arranjo
laranja, com exatamente um arranjo sendo vendido entre o laranja e o amarelo.”
podemos montar as possíveis opções de venda que seriam:
- laranja, branco, amarelo, vermelho, rosa
- rosa, laranja, branco, amarelo, vermelho

Avaliando essas opções, podemos afirmar que as opções 1, 2, 4 e 5 podem ser
verdadeiras em nossas ordens. Diferente da opção 3, que é sempre falsa, já que se
o laranja fosse o terceiro, o amarelo teria que ser o quinto e não teríamos espaço
para o vermelho vir depois.
