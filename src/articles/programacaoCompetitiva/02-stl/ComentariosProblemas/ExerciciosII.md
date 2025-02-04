---
title: "05 - Exercícios"
description: "Larger Score, Escalator, Brackets Balanceados"
slug: "exercicios-2"
---
## Resolução dos Exercícios
### Exercícios D, F, G, H

### Larger Score
- É dado um vetor não necessariamente ordenado  
- Observa-se que o vetor é dividido em duas partes:  
```
1a Parte -> (v[0], v[1], ... , v[k-1])  
2a Parte -> (v[k], v[k+1], ... , v[n-1])  
Objetivo -> Seja S = v[0] + v[1] + … + v[k-1], 
trocar um valor dessa soma SS, por um valor da segunda parte, de 
forma que se tenha uma nova soma S' >= S+1.`
```

- Como eu posso fazer isso?  
    - As trocas podem ser feitas entre elementos adjacentes.  
Ex:

![img1](./img1.png)

- Nesse exemplo o resultado é 3, isto é, houveram três trocas.  
- Como resolver?  
    - O exercício quer que sejam realizadas o mínimo de trocas possíveis.

![img2](./img2.png)

- Minha Solução:  
- Talvez seja overkill, mas... vamos lá.  
- 1º Passo: Ordenar o vetor, guardando seus índices.

![img3](./img3.png)

- 2º Passo: Passar todos os elementos do vetor ordenado.

![img4](./img4.png)

- Nesse passo se o número pertencer à primeira parte do vetor (número vermelho) adiciona o índice em uma priority queue.  
- Ex: Ao passarmos pelo 2, por exemplo, adicionamos o índice 3 na priority, ao passarmos pelo elemento 5, adicionamos o índice 4 na priority e assim sucessivamente.  
- Se o número pertencer à segunda parte do vetor (número azul), a gente verifica se tem algum item na priority, se tiver, a gente encontrou um par que pode ser trocado.  
- Dessa forma, pode-se verificar qual é a mínima distância entre todos esses pares, e essa é nossa resposta final.  
- E porquê usar a priority?  
- Porque ela vai guardar os elementos de índice mais alto, ou seja, os mais próximos à sua posição atual.  
- Observe que como os elementos estão ordenados, eu vou achar somente elementos maiores do que aqueles que eu já coloquei na priority, e isso traz a solução ótima do exercício.

```cpp
#include <bits/stdc++.h>

#define MAX 1e18
#define MOD
#define INF

using namespace std;

typedef long long ll;
typedef pair<ll, ll> ii;
typedef tuple<ll, ll, ll> iii;
typedef vector<ll> vi;
typedef vector<ii> vii;
typedef vector<iii> viii;

bool cmp(const ii &a, const ii &b){
    if(a.first == b.first)
        return a.second > b.second;

    return a.first < b.first;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    ll n, k;
    cin >> n >> k;

    vii arr(n);

    for(ll i = 0; i < n; i++){
        cin >> arr[i].first;
        arr[i].second = i;
    }

    sort(begin(arr), end(arr), cmp);

    ll mi = MAX;
    priority_queue<ll> pq;
        
    for(int i = 0; i < n; i++){
        int idx = arr[i].second;

        if(idx >= k){
            if(!pq.empty())
                mi = min(mi, arr[i].second - pq.top());
        }
        else
            pq.push(idx);
    }

    cout << (mi == MAX ? -1 : mi) << "\n";

    return 0;
}
```

### Escalator
- Descrição: uma escada rolante permite o deslocamento em ambas suas direções. O percurso para ir de uma ponta da escada até a outra leva 10 segundos, isto é, se uma pessoa entrar no tempo T, ela deixa a escada no tempo T + 10. As seguintes regras se aplicam:  
- a escada está inicialmente parada;  
- quando uma pessoa chega em uma de suas extremidades, a escada inicia o movimento na direção desejada;  
- se a escada já estiver em movimento, a pessoa pode entrar imediatamente nela;  
- caso contrário, é preciso esperar ela parar e iniciar o movimento contrário.

- Problema: simular o tempo de funcionamento da esteira, dadas informações sobre N pessoas, incluindo o tempo de chegada de cada um e a direção de sua locomoção.

- Solução: primeiramente, precisamos pensar em uma forma de guardar as informações dos N papis de maneira a manter a ordem de chegada de cada um e seguí-la, para cada uma das direções possíveis.  
- Mas, como podemos fazer isso?  
- Um vetor seria uma possibilidade, porém, dado o problema, podemos pensar que o problema pede para que o primeiro papi que entrar em qualquer um dos lados também deve ser o primeiro a sair, portanto…

![img5](./img5.png)

![img6](./img6.png)

![img7](./img7.png)

![img8](./img8.png)

![img9](./img9.png)

- Confira na GIF abaixo:

![gif1](./gif1.gif)

- O algoritmo se repete até que ambas as filas estejam vazias e tenhamos simulado todas as viagens de cada papi;  
- Ao final das trajetórias, basta somar 10 ao T obtido, contabilizando a última viagem feita pelo último papi.

```cpp
#include <bits/stdc++.h>
 
#define MAX
#define MOD
 
using namespace std;
 
typedef long long ll;
typedef vector<int> vi;
typedef pair<int, int> ii;
typedef vector<ii> vii;
 
void setIO(string s){
    if (!s.empty()){
        freopen((s + ".in").c_str(), "r", stdin);
        freopen((s + ".out").c_str(), "w", stdout);
    }
}
 
int main(){
    setIO("");
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
 
    vector<queue<int>> q (2);
    int n, time, ans = 0;
	bool side, trip;
    cin >> n >> time >> side;
    q[side].push(time);
	trip = side;
 
    for(int i = 1; i < n; ++i){
        cin >> time >> side;
        q[side].push(time);
    } 
 
    while(!q[0].empty() || !q[1].empty()){
		if(q[trip].empty() || (q[trip].front() > ans + 10 && 
			(!q[!trip].empty() && q[!trip].front() < q[trip].front()))){
			ans += 10;
			trip = !trip;
		}
 
		if(q[trip].front() > ans)
			ans = q[trip].front();
 
		q[trip].pop();
	}
 
    cout << ans + 10 << "\n";
 
    return 0;
}
```

### Brackets balanceados
- Caracteres delimitadores como (, ), {, }, [ e ] podem ser chamados de brackets.  
- Dois brackets são considerados um par se um bracket de abertura ocorre à esquerda de um de fechamento e se eles são exatamente do mesmo tipo: (), [], {}.

- Uma certa expressão é bem definida ou balanceada se atende uma das seguintes propriedades:  
- Ela é uma cadeia de caracteres vazia.  
- Ela é formada por uma cadeia bem definida envolvida por brackets. Ou seja, se S é balanceada, então as cadeias (S), [S] e {S} também são.  
- Ela é formada pela concatenação de duas cadeias balanceadas. Portanto, se X e Y são balanceadas, então XY também é.

#### Exemplos  
- Expressões balanceadas  
```
()  
({})  
{}()[]  
({[]()}[])  
```

- Expressões não balanceadas  
- Problema: Para uma expressão qualquer formada apenas por brackets, como determinar se ela é balanceada ou não?  
- Uma forma de resolver isto é utilizando uma pilha de apoio.  
- Percorremos a expressão da esquerda para direita:  
- Se o caractere atual é um bracket de abertura: empilhamos o bracket  
- Se o caractere atual é um bracket de fechamento  
    - Se a pilha está vazia, a expressão não está balanceada  
    - Se o caractere corresponde ao topo da pilha, desempilhamos  
    - Caso contrário, a expressão não está balanceada  
- Terminando de percorrer a expressão, se a pilha ainda contiver algum elemento, então algum bracket não foi fechado.

- Confira na GIF abaixo:
![gif2](gif2.gif)

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);

int main(){
    fast_io
    ll t;
    cin >> t;
    while(t--){
        ll n; cin >> n;
        string s; cin >> s;
        ll tam = s.size();

        ll cont = 0;
        int i = 0;
        ll res = tam;
        while(i <= tam-1){
            bool f = false;
            stack <char> st;
            char c = s[i];
            st.push(s[i]);
            for(int j = i+1; j < tam; j++){
                bool flag = false;
                if(s[j] == c){
                    int ini = i;
                    bool at = true; 
                    int fim = j;
                    while(ini <= fim){
                        if(s[ini++] != s[fim--]){
                            at = false;
                            break;
                        }
                    }
                    if(at == true)flag = true;

                }
                if(!st.empty()){
                    ll o = st.top();
                    if(o == '(' && s[j] == ')')st.pop();
                    else st.push(s[j]);
                }
                else st.push(s[j]);

                if(flag || st.empty()){
                    res -= (j - i + 1);
                    cont++;
                    i = j+1;
                    f = true;
                    break;
                }
                
            }
            if(!f)break; 
        }
        cout << cont << " " << res << "\n";

    }
    
}
```

#### Sugestões de exercícios

[EXPRESS11 – Expressões (SPOJ BR)](https://br.spoj.com/problems/EXPRES11/)  

[Balanced Brackets (HackerRank)](https://www.hackerrank.com/challenges/balanced-brackets/problem)  

[Desafio: 224C – Bracket Sequence (CodeForces)](https://codeforces.com/contest/224/problem/C)
