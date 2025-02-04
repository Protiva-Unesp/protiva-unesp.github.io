---
title: "03 - C++ para competição"
description: "Leitura e escrita de dados em competições de programação, entrada/saída padrão, formatos de problemas e situações comuns"
slug: "cpp-para-competicao"
author: "Pedro Henrique Paiola, Rene Pegoraro, Wilson M Yonezawa"
---
### Código base
``` cpp
#include<bits/stdc++.h>
using namespace std;
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); //Se precisar de fast-io
}
```

### Entrada padrão - cin
``` cpp
int numA, numB;
double numC;
string name;
cin >> numA >> numB >> numC >> name;
``` 

### Saída padrão - cout
``` cpp
int a;
float c;
...
cout << “A: ” << a << endl;
cout << “C: ” << setprecision(3) << c << endl;
``` 

### Formato padrão dos problemas
- Descrição do problema
- Formato da Entrada
- Formato da Saída
- Exemplos

### Formato padrão dos problemas
- Muita atenção ao formato da saída, em especial ao número de espaços e quebras de linhas.
- Problemas na apresentação dos resultados podem gerar um Presentation Error (PE)
- Alguns juízes não possui esta classe de resposta, e consideram erros de apresentação como uma Wrong Answer (WA).

### Situações comuns
Ler até acabar o arquivo de entrada
``` cpp
int a, b, c;
while(cin >> a >> b)
{
    c = a + b;
    cout << c << endl;
}
``` 

#### Exemplo de entrada 
```
1 2
5 10
3 2
```
#### Exemplo de saída
```
3
15
5
```

Número de casos de teste predeterminado (Opção 1)
``` cpp
int t, a, b, c;
cin >> t;
for(int i = 0; i < t; i++)
{
    cin >> a >> b;
    c = a + b;
    cout << c << endl;
}
``` 

#### Exemplo de entrada
```
3
1 2
5 10
3 2
```

#### Exemplo de saída
```
3
15
5
```

Número de casos de teste predeterminado (Opção 2)
``` cpp
int t, a, b, c;
cin >> t;
while(t--)
{
    cin >> a >> b;
    c = a + b;
    cout << c << endl;
}
``` 

#### Exemplo de entrada
```
3
1 2
5 10
3 2
```

#### Exemplo de saída
```
3
15
5
```

Última entrada é marcada por zeros
``` cpp
int a, b, c;
while(1)
{
    cin >> a >> b;
    if (a == 0 && b == 0)
        break;
    c = a + b;
    cout << c << endl;
}
``` 

### Exemplo de entrada
```
1 2
5 10
3 2
0 0
```

### Exemplo de saída
```
3
15
5
```
