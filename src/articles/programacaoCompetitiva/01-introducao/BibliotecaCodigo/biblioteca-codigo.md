---
title: "02 - Biblioteca de Código (C++)"
description: "Biblioteca de código desenvolvida por Thiago Alexandre"
slug: "biblioteca-codigo-cpp"
author: "Thiago Alexandre Domingues de Souza"
---
## Índice

1. [Padrões](#1-padrões)  
2. [Tabela ASCII](#2-tabela-ascii)  
3. [STL](#3-stl)  

    3.1. [Map](#31-map)  

    3.2. [Set](#32-set)  

    3.3. [Queue](#33-queue)  

4. [Ordenação](#4-ordenação)  

    4.1. [Ordenação crescente de vetor](#41-ordenação-crescente-de-vetor)  

    4.2. [Ordenação crescente de struct](#42-ordenação-crescente-de-struct)  

5. [Grafos](#5-grafos)  

    5.1. [Depth First Search (DFS)](#51-depth-first-search-dfs)  

    5.2. [Breadth First Search (BFS)](#52-breadth-first-search-bfs)  

    5.3. [Floyd–Warshall](#53-floyd-warshall)  

    5.4. [Floyd MinMax](#54-floyd-minmax)  

    5.5. [Dijkstra](#55-dijkstra)  

    5.6. [Bellman-Ford](#56-bellman-ford)  

    5.7. [PRIM](#57-prim)  

    5.8. [Kruskal](#58-kruskal)  

    5.9. [Ordenação Topológica](#59-ordenação-topológica)  

    5.10. [Biconectividade](#510-biconectividade)  

    5.11. [Bipartição](#511-bipartição)  

    5.12. [Número de caminhos distintos em um DAG](#512-número-de-caminhos-distintos-em-um-dag)  

    5.13. [Fluxo Máximo - Edmonds-Karp](#513-fluxo-máximo---edmonds-karp)  

    5.14. [Componentes Fortemente Conectados](#514-componentes-fortemente-conectados)  

    5.15. [Karp](#515-karp)  

    5.16. [Ciclo Euleriano](#516-ciclo-euleriano)  

6. [Programação Dinâmica](#6-programação-dinâmica)  

    6.1. [Longest Increasing Subsequence - LIS](#61-longest-increasing-subsequence---lis)  

    6.2. [Longest Common Subsequence - LCS](#62-longest-common-subsequence---lcs)  

    6.3. [Matrix Chain Multiplication - MCM](#63-matrix-chain-multiplication---mcm)  

    6.4. [Knapsack - problema da mochila binária](#64-knapsack---problema-da-mochila-binária)  

    6.5. [Edit Distance](#65-edit-distance)  

    6.6. [Máxima soma de subconjunto <= N](#66-máxima-soma-de-subconjunto--n)  

    6.7. [Coins Change](#67-coins-change)  

    6.8. [Coins Ways](#68-coins-ways)  

    6.9. [Maximum Interval Sum](#69-maximum-interval-sum)  

    6.10. [Mochila Fracionária](#610-mochila-fracionária)  

7. [Geometria](#7-geometria)  

    7.1. [Distância de ponto a ponto](#71-distância-de-ponto-a-ponto)  

    7.2. [Distância de ponto a reta](#72-distância-de-ponto-a-reta)  

    7.3. [Produto Escalar](#73-produto-escalar)  

    7.4. [Produto Vetorial](#74-produto-vetorial)  

    7.5. [Área do triângulo com sinal](#75-área-do-triângulo-com-sinal)  

    7.6. [Dois pontos para equação da reta](#76-dois-pontos-para-equação-da-reta)  

    7.7. [Reta perpendicular à reta](#77-reta-perpendicular-à-reta)  

    7.8. [Ponto de intersecção entre duas retas](#78-ponto-de-intersecção-entre-duas-retas)  

    7.9. [Intersecção de segmentos](#79-intersecção-de-segmentos)  

    7.10. [Centro da circunferência dado 3 pontos](#710-centro-da-circunferência-dado-3-pontos)  

    7.11. [Distância esférica](#711-distância-esférica)  

    7.12. [Ponto no polígono](#712-ponto-no-polígono)  

    7.13. [Área do Polígono](#713-área-do-polígono)  

    7.14. [Convex Hull](#714-convex-hull)  

8. [Matemática Geral](#8-matemática-geral)  

    8.1. [Primalidade](#81-primalidade)  

    8.2. [Exponenciação](#82-exponenciação)  

    8.3. [BigInt](#83-bigint)  

    8.4. [Módulo com BigInt](#84-módulo-com-bigint)  

    8.5. [BigMod](#85-bigmod)  

    8.6. [Combinatória C(n,k) com n e k grandes](#86-combinatória-cnk-com-n-e-k-grandes)  

    8.7. [Quantidade aproximada de primos <= N](#87-quantidade-aproximada-de-primos--n)  

    8.8. [Fibonacci com BigNum](#88-fibonacci-com-bignum)  

    8.9. [Manipulação de bits: Decimal para binário](#89-manipulação-de-bits-decimal-para-binário)  

    8.10. [Crivo de Eratóstenes - Sieve](#810-crivo-de-eratóstenes---sieve)  

    8.11. [Segment Sieve - Números primos em um intervalo](#811-segment-sieve---números-primos-em-um-intervalo)  

    8.12. [Fatores Primos de um número](#812-fatores-primos-de-um-número)  

    8.13. [GCD](#813-gcd)  

    8.14. [GCD/LCM](#814-gcdlcm)  

    8.15. [Método Newton-Raphson](#815-método-newton-raphson)  

9. [Busca](#9-busca)  

    9.1. [Knuth-Morris-Pratt](#91-knuth-morris-pratt)  

    9.2. [Binary Search](#92-binary-search)  

    9.3. [Ternary Search](#93-ternary-search)  

    9.4. [Segment Tree](#94-segment-tree)  
    
## 1. Padrões
### Template
```cpp
#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <string>
#include <cstring>
#include <cmath>
#include <vector>
#include <stack>
#include <queue>
#include <map>
#include <set>
#include <algorithm>
#define MIN(a,b) ((a) < (b) ? (a) : (b))
#define MAX(a,b) ((a) > (b) ? (a) : (b))
#define ABS(a) ((a) > 0 ? (a) : (-a))
#define FOR(i,v,n) for(int i=v,_n=n;i<_n;++i)
#define FORD(i,v,n) for(int i=(n-1),_v=v;i>=_v;--i)
#define REP(i,n) FOR(i,0,n)
#define REPD(i,n) FORD(i,0,n)
#define FOREACH(it,c) for(__typeof((c).begin())
it=(c).begin();it!=(c).end();++it)
#define MP(a,b) make_pair((a),(b))
#define ALL(c) (c).begin(),(c).end()
#define PB push_back
#define MAX_V
#define MAX_A
#define INF 2147483647
#define PRINT(x) x

const double PI = acos(-1.0);
using namespace std;
int main(){
	return 0;
}
```

### Definição de struct
```cpp
typedef struct{
...
} TReg;
```
O nome da estrutura deve começar sempre com um 'T' (de tipo) seguida do nome começando em maiúscula. Geralmente quando eu não sei que nome dar, eu ponho TReg mesmo.

### Leitura de string até EOF
```cpp
while(cin.getline(str, MAXLINE))
	cout << str << endl;
```

### sscanf(char *input, char *format, variables)
Usa a variável input como entrada, usando o formato passado e armazena os valores nas variáveis

```cpp
while(sscanf(line, "%d %d %d", &s, &t, &w) == 3)
	printf("%d %d %d", s, t, w);
```

### sprintf(char *output, char *format, variables)
Utiliza as variáveis de entrada, usando o formato passado, para armazenar em output. Obs: não imprime na tela

```cpp
sprintf(line, "%d %d %d", a, b, c);
printf("%s\n", line);
```

## 2. Tabela ASCII
![tabelaAscii](tabelaAscii.png)

## 3. STL
### 3.1. Map
#### Declaração
```cpp
map<string, int> m;
map<string, int>::iterator it;
```
#### Inserção (sobrescreve valores existentes)
```cpp
m["abracadabra"] = 10;
m["yabadabadoo"] = 15;
m["hi-yo silver"] = 20;
```
#### Remoção
```cpp
m.erase("yabadabadoo");
```
#### Percurso
```cpp
for(it=m.begin(); it != m.end(); it++)
	cout << it->first << " " << it->second << endl;
```
#### Mostrar valor (se não existir retorna 0)
```cpp
cout << m["abracadabra"] << endl;
```
#### Contar número de elementos iguais à chave
```cpp
cout << m.count("hi-yo silver") << endl;
```
#### Esvaziar map
```cpp
m.clear();
```

### 3.2. Set
#### Declaração
```cpp
set<int> s;
```
#### Inserção
```cpp
s.insert(10);
```
#### Se count > 0, elemento está no Set
```cpp
cout << s.count(10) << endl;
```
#### Esvaziar Set
```cpp
s.clear();
```

### 3.3. Queue
#### Declaração
```cpp
queue<int> Q;
```
#### Inserção
```cpp
Q.push(10);
```
#### Mostrar primeiro elemento da fila
```cpp
cout << Q.front() << endl;
```
#### Remove primeiro elemento da fila (retorna void)
```cpp
Q.pop();
```
#### Verifica se fila está vazia (retorna true se estiver vazia)
```cpp
if(!Q.empty()){ ... }
```
#### Retorna tamanho da fila
```cpp
cout << Q.size() << endl;
```

## 4. Ordenação
### 4.1. Ordenação crescente de vetor
```cpp
int v[n];
/* -1: a < b
* 0: a == b
* 1: a > b */
int cmp(const void * a, const void * b){
	return ( *(int*)a - *(int*)b );
}
qsort(v, n, sizeof(int), cmp);
```

### 4.2. Ordenação crescente de struct
```cpp
typedef struct {
	int u, v, w;
} TAdj;
TAdj adj[n];
int cmp(const void *a, const void *b){
	TAdj *x, *y;
	x = (TAdj*)a;
	y = (TAdj*)b;
	if(x->w < y->w)
		return -1;
	if(x->w > y->w)
		return 1;
return 0;
}
qsort(adj, n, sizeof(TAdj), cmp);
```

## 5. Grafos
#### Estruturas gerais
```cpp
int grau[MAX_V]; // número de arestas no vértice
int d[MAX_V]; // distância
int p[MAX_V]; // pai do vertice
int visited[MAX_V]; // vértices visitados
```
#### Grafos com peso
```cpp
typedef struct{
	int v; // vértice
	double w; // peso
} TAdj;
TAdj adj[MAX_V][MAX_A];
```
#### Grafos sem peso
```cpp
int adj[MAX_V][MAX_A];
```
#### Inserção de aresta
```cpp
void aresta(int a, int b, double w){
	adj[a][ grau[a] ].v = b;
	adj[a][ grau[a] ].w = w;
	grau[a]++;
	adj[b][ grau[b] ].v = a;
	adj[b][ grau[b] ].w = w;
	grau[b]++;
}
```
#### Inicialização do grafo
```cpp
memset(grau, 0, sizeof(grau));
memset(visited, 0, sizeof(visited));
memset(p, -1, sizeof(p));
```
### 5.1. Depth First Search (DFS)
- testado com o problema 459
```cpp
void dfs(int s){
	int t;
	visited[s] = 1;
	for(int i=0; i<grau[s]; i++){
		t = adj[s][i];
		if(visited[t] == 0){
			p[t] = s;
			dfs(t);
		}
	}
}
void initializeDfs(){
	memset(visited, 0, sizeof(visited));
	memset(p, -1, sizeof(p));
}
```

### 5.2. Breadth First Search (BFS)
- testado com o problema 627
```cpp
void bfs(int inicio){
	int s, t;
	queue<int> Q;
	memset(visited, 0, sizeof(visited));
	memset(p, -1, sizeof(p));
	d[inicio] = 0;
	visited[inicio] = 1;
	Q.push(inicio);
	while(!Q.empty()){
		s = Q.front();
		Q.pop();
		for(int i=0; i<grau[s]; i++) {
			t = adj[s][i];
			if(visited[t] == 0){
				visited[t] = 1;
				d[t] = d[s] + 1;
				p[t] = s;
				Q.push(t);
			}
		}
	}
}
```
### 5.3. Floyd–Warshall
- testado com o problema 10171
```cpp
void initialize(){ // inicializar antes de ler o grafo
	for(int i=0; i<MAX_V; i++){
		for(int j=0; j<MAX_V; j++){
			adj[i][j] = INF;
			p[i][j] = -1;
		}
		adj[i][i] = 0;
	}
}
void floyd(){
	for(int k=0; k<MAX_V; k++)
		for(int i=0; i<MAX_V; i++)
			for(int j=0; j<MAX_V; j++)
				if(adj[i][k] + adj[k][j] < adj[i][j]){
					adj[i][j] = adj[i][k] + adj[k][j];
					p[i][j]= p[k][j];
	}
}
```
### 5.4. Floyd MinMax
- testado com o problema 10048
```cpp
void floydMinMax(){
	int maior;
	for(int k=0; k<MAX_V; k++)
		for(int i=0; i<MAX_V; i++)
			for(int j=0; j<MAX_V; j++){
				if(adj[i][k] > adj[k][j])
					maior = adj[i][k];
				else
					maior = adj[k][j];
				if(adj[i][j] > maior){
					adj[i][j] = maior;
					adj[j][i] = maior;
		}
	}
}
```
### 5.5. Dijkstra
testado com o problema 929
```cpp
void dijkstra(int inicial){
	priority_queue< pair<int,int> > heap; // peso, vertice
	int s, t, peso;
	for(int i=0; i<MAX_V; i++)
		d[i] = INF;
	memset(p, -1, sizeof(p));
	heap.push(make_pair(d[inicial] = 0, inicial));
	while(!heap.empty()){
		s = heap.top().second;
		heap.pop();
		for(int i=0; i<grau[s]; i++){
			t = adj[s][i].v;
			peso = adj[s][i].w;
			if(d[s] + peso < d[t]){
				d[t] = d[s] + peso;
				p[t] = s;
				heap.push(make_pair(-d[t], t));
			}
		}
	}
}
```

### 5.6. Bellman-Ford
- testado com o problema 558
- Obs.: algoritmo de caminhos mais curtos de origem única; é possível inserir arestas com peso negativo; retorna falso caso haja ciclo com peso negativo (não existe solução).
```cpp
bool bellmanFord(int inicial, int n){
	memset(p, -1, sizeof(p));
	for(int i=0; i<n; i++)
		d[i] = INF;
	d[inicial] = 0;
	for(int i=0; i<n; i++) // todos vertices
		for(int j=0; j<n; j++) /* todas */
			for(int k=0; k<grau[j]; k++)/* arestas */
				if(d[j] + adj[j][k].w < d[adj[j][k].v]){
					d[adj[j][k].v] = d[j] + adj[j][k].w;
				p[adj[j][k].v] = j;
			}
		for(int i=0; i<n; i++)
			for(int j=0; j<grau[i]; j++)
				if(d[adj[i][j].v] > d[i] + adj[i][j].w)
					return false;
		return true;
}
```
### 5.7. PRIM
- testado com o problema 10034
```cpp
int total; //armazena o custo total da MST
void prim(int inicio, int n){
	priority_queue< pair<int, int> > heap;
	int s, t, arc;
	for(int i=0; i<n; i++)
		d[i] = INF;
	memset(p, -1, sizeof(p));
	memset(visited, 0, sizeof(visited));
	heap.push(make_pair(d[inicio] = 0, inicio));
	total = 0;
	while(!heap.empty()){
		s = heap.top().second;
		heap.pop();
		if(!visited[s])
			total += d[s];
		visited[s] = 1;
		for(int i=0; i<grau[s]; i++){
			t = adj[s][i].v;
			arc = adj[s][i].w;
			if(d[t] > arc && !visited[t]){
				d[t] = arc;
				p[t] = s;
				heap.push(make_pair(-d[t], t));
			}	
		}
	}
}
```
### 5.8. Kruskal
- testado com o problema 10034
```cpp
typedef struct{
	int u, v, w;
} TAdj;
TAdj adj[MAX_A];
TAdj mst[MAX_A]; //armazena a MST
int nro_arestas, total, posMst;
int findSet(int x){
	if(x != p[x])
	p[x] = findSet(p[x]);
	return p[x];
}
void kruskal(){
	int u, v, u_set, v_set;
	posMst = 0;
	for(int i=0; i<MAX_V; i++) // todos vértices
		p[i] = i;
	qsort(adj, nro_arestas, sizeof(TAdj), cmp);
	for(int i=0; i<nro_arestas; i++){
		u = adj[i].u; v = adj[i].v;
		u_set = findSet(u);
		v_set = findSet(v);
		if(u_set != v_set){
			p[v_set] = p[u_set];
			mst[posMst++] = adj[i];
			total += adj[i].w;
		}
	}
}
```
### 5.9. Ordenação Topológica
- testado com o problema 11060
- Obs.: atenção pois uma ordenação topológica possui diversas saídas possíveis
```cpp
int indegree[MAX_V]; // grau de entrada do vértice
int used[MAX_V]; // vértice foi usado?
queue<int> L; // armazena a ordenação topológica
void topological_sort(){
	queue<int> z;
	int v, w;
	memset(indegree, 0, sizeof(indegree));
	for(int i=0; i<MAX_V; i++)
		if(grau[i])
			for(int j=0; j<grau[i]; j++)
				indegree[adj[i][j]]++;
	for(int i=0; i<MAX_V; i++)
		if(used[i] && !indegree[i])
	z.push(i);
	while(!z.empty()){
		v = z.front(); z.pop();
		L.push(v);
		for(int i=0; i<grau[v]; i++){
			w = adj[v][i];
			indegree[w]--;
			if(!indegree[w])
			z.push(w);
		}
	}
}
```
### 5.10. Biconectividade
- testado pontos de articulação com o problema 10199
- testado pontes com o problema 796
- Obs.: algoritmo encontra os pontos de articulação e as pontes de um grafo. Se o grafo for desconexo executar o algoritmo novamente a partir de um vértice não visitado
```cpp
int nroVert, contRaiz;
vector< pair<int,int> > bridge;
set<int> artPoint;
int low[MAX_V], num[MAX_V];
void initializeArticulation(){
	memset(visited, 0, sizeof(visited));
	memset(p, -1, sizeof(p));
	contRaiz = 0;
	nroVert = 1;
}
void findArticulation(int v){
	int t;
	visited[v] = 1;
	num[v] = low[v] = nroVert++;
	for(int i=0; i<grau[v]; i++){
		t = adj[v][i];
		if(!visited[t]){
			p[t] = v;
			if(num[v] == 1) // conta filhos da raiz na árvore
				contRaiz++;
			findArticulation(t);
			if(low[t] > num[v])
				bridge.push_back(make_pair(v, t));
			if(low[t] >= num[v] && num[v] != 1)
				artPoint.insert(v);
			else if(num[v] == 1 && contRaiz > 1)
				artPoint.insert(v);
			low[v] = MIN(low[v],low[t]);
		} else if(p[v] != adj[v][i])
				low[v] = MIN(low[v],num[t]);
	}
}
```
### 5.11. Bipartição
- Algoritmo determina se um grafo é ou não bipartido, ou seja, se o grafo pode ser pintado em apenas duas cores sem vértices adjacentes com a mesma cor.
- Testado com o problema 11080.
```cpp
int particao[MAX_V]; // marca qual conjunto está um vértice
int visited[MAX_V], grau[MAX_V];
bool is_bipartite;
void _dfsVisit(int s, int p){
	int t;
	visited[s] = 1;
	particao[s] = p;
	for(int i=0; i<grau[s]; i++){
		t = adj[s][i];
		if(!visited[t])
		_dfsVisit(t, !p);
		else
		if(particao[t] == p)
		is_bipartite = false;
	}
}
void bipartite(){
	is_bipartite = true;
	memset(visited, 0, sizeof(visited));
	for(int i=0; i<MAX_V; i++) {
		if(is_bipartite == false)
			break;
		if(grau[i] > 0 && !visited[i])
			_dfsVisit(i,0);
	}
}
```
### 5.12. Número de caminhos distintos em um DAG
- testado com o problema 988
```cpp
int countDAGPaths(int s, int t){
	int u;
	topological_sort();
	memset(d, 0, sizeof(d));
	d[s] = 1;
	while(!L.empty()){
		u = L.front(); L.pop();
		for(int i=0; i<grau[u]; i++)
			d[adj[u][i]] = d[adj[u][i]] + d[u];
	}
	return d[t];
}
```
### 5.13. Fluxo Máximo - Edmonds-Karp
- testado com o problema 820 (Internet Bandwidth)
- Complexidade O(V*E*E) - bom para grafos esparsos
```cpp
#define residue(src, dst) ( c[ (src) ][ (dst) ] -
flow( (src), (dst) ) )
#define flow(src, dst) ( f[ (src) ][ (dst) ] - f[ (dst) ]
[ (src) ])

int f[MAX_V][MAX_V]; // fluxo
int c[MAX_V][MAX_V]; // capacidade = peso das arestas

void initialize(){
	memset(f, 0, sizeof(f));
	memset(c, 0, sizeof(c));
	// se grafo possui arestas paralelas com pesos
	// diferentes, acumula capacidade
	for(int i=0; i<MAXV; i++)
		for(int j=0; j<grau[i]; j++)
			c[i][adj[i][j].v] += adj[i][j].w;
}
int maxFlowEdmondsKarp(int s, int t){
	int F = 0, minCapacity, u, v;
	while(true){
		queue<int> Q;
		memset(p, -1, sizeof(p));
		Q.push(s);
		p[s] = -2;
		// BFS
		while(!Q.empty() && p[t] == -1){
			u = Q.front();
			Q.pop();
			for(int i=0; i<grau[u]; i++){
			v = adj[u][i].v;
			if(p[v] == -1 && residue(u, v) > 0){
			p[v] = u;
			Q.push(v);
		}	
	}
}
	// não encontrou caminho até t
	if(p[t] == -1)
		return F;
	// encontra menor capacidade no caminho
	minCapacity = INF;
	for(v = t, u = p[v]; u >= 0; v = u, u = p[v])
		minCapacity = MIN(minCapacity, residue(u, v));
	// incrementa fluxo no caminho
	for(v = t, u = p[v]; u >= 0; v = u, u = p[v])
		f[u][v] += minCapacity;
	F += minCapacity;
	}
	return F;
}
```
### 5.14. Componentes Fortemente Conectados
- É o conjunto de vértices em que para cada vértice u,v existe um caminho de u para v e vice-versa. Matriz invAdj representa a lista de adjacências inversa, ou seja, em vez de u->v, nela definimos v->u. Elementos com o mesmo id no vetor visited pertencem ao mesmo grupo fortemente conectado. Testado com o problema 247.
```cpp
stack<int> S;
void dfsVisit(int v){
	visited[v] = 1;
	for(int i = 0; i < grau[v]; i++)
		if(!visited[adj[v][i]])
	dfsVisit(adj[v][i]);
	S.push(v);
}
void dfsVisit2(int x){
	visited[x] = id;
	for(int i = 0; i < invGrau[x]; i++)
		if(!visited[invAdj[x][i]])
	dfsVisit2(invAdj[x][i]);
}
void kosaraju(int start, int end){
	memset(visited, 0, sizeof(visited));
	for(int i=start; i<end; i++)
		if(!visited[i])
	dfsVisit(i);
	memset(visited, 0, sizeof(visited)); id = 1;
	while(!S.empty()){
		int u = S.top(); S.pop();
		if(!visited[u]){
		dfsVisit2(u); id++;
	}
}
}
```
### 5.15. Karp
```cpp
int weight[MAX][MAX], d[MAX+1][MAX];
int n, m;
double MMC(){
	//Initialize
	int k, u, v, s = 0;
	for(k=0 ; k<= n ; k++)
		for(u= 0 ; u<n ; u++)
			d[k][u] = INF;
	d[0][s] = 0;
	//Compute distances
	for(k=1; k<=n ; k++)
		for(v=0 ; v<n ; v++)
			for(u=0 ; u<n ; u++)
				if(weight[u][v] < INF)
					d[k][v] = MIN(d[k][v], d[k-1][u]+weight[u][v]);
	//Compute lambda using karp's theorem
	double lamda = INF;
	for(u=0 ; u<n ; u++){
		double currentLamda = -INF; // changed here
		for(int k=0 ; k<n ; k++)
			if(d[n][u] < INF && d[k][u] < INF)
				currentLamda = MIN(currentLamda, 1.0*(d[n][u]-d[k]
				[u])/(n-k) );
		lamda = MIN(lamda, currentLamda);
	}
	return lamda;
}
```
### 5.16. Ciclo Euleriano
```cpp
//Informação sobre uma aresta
typedef struct{
	int label; //contém um label
	int dest; //e o destino da aresta
}TInfoAr;
int vertices_visitados[MAX_V], //marca vértices visitados - BFS
grau[MAX_V], //grau de cada vértice
vertice_presente[MAX_V], //vértices presentes no grafo achouCiclo, //marca se encontrou um ciclo euleriano
nvt, //Número de vértices
nar, //Número de arestas
inicioCiclo; //Vértice inicial em busca do ciclo euleriano
/* Representação do grafo: Cada elemento guarda um vértice e as
arestas que são adjacentes.
Ex: 1 -> 0 1 2
2 3 2
Vértice 1 está ligado às arestas 0, 1, 2 e estas arestas têm
como destino os vértices
2, 3, 2, respectivamente
*/
TInfoAr va[MAX_V][MAX_A];
//Ciclo euleriano
deque< int > cicloEuleriano;
//Inicializa o grafo
void ini_grafo(int n=0){
	nar = 0;
	nvt = n;
	memset(vertice_presente, 0, sizeof(vertice_presente));
	memset(grau, 0, sizeof(grau));
}
void printGrafo(){
	cout<<nvt<<" "<<nar<<endl;
	for(int i=0; i<MAX_V; i++){
		if(vertice_presente[i]==0) continue;
	cout<<i<<" -> ";
	for(int j=0; j<grau[i]; j++){
		cout<<"("<<va[i][j].dest<<","<<va[i][j].label<<")";
	}
		cout<<endl;
	}
}
//Insere uma aresta no grafo
void aresta(int u, int v){
	//Verifica se os vértices u e v estão no grafo, atualizando o
	//número de vértices e o vetor vertice_presente
	if(vertice_presente[u]==0){ vertice_presente[u]=1; nvt++; }
	if(vertice_presente[v]==0){ vertice_presente[v]=1; nvt++; }
	//Insere a aresta u-v e v-u no grafo
	va[u][ grau[u] ].dest = v; va[u][ grau[u] ].label = nar;
	grau[u]++;
	va[v][ grau[v] ].dest = u; va[v][ grau[v] ].label = nar;
	grau[v]++;
	//Incrementa o número de arestas
	nar++;
}
//Verifica usando o BFS se o grafo é conexo
bool eh_conexo(int inicio){
	queue<int> fila;
	int u, vAux;
	memset(vertices_visitados, 0, sizeof(vertices_visitados));
	fila.push(inicio);
	vertices_visitados[inicio] = 1;
	while(fila.empty()==false){
		u = fila.front(); fila.pop();
		for(int i=0; i<grau[u]; i++){
			vAux = va[u][i].dest;
			if(vertices_visitados[vAux]==0){
			vertices_visitados[vAux]=1;
			fila.push(vAux);
		}
	}
}
	for(int i=0; i<MAX_V; i++)
		if(vertice_presente[i]==1 && vertices_visitados[i]==0)
			return false;
	return true;
}
//Rotaciona o ciclo e obtêm o vértice onde deverá encontrar o novo ciclo
void rotacionaCiclo(){
	//retira o primeiro elemento *1 2 3 4 1 -> 2 3 4 1
	cicloEuleriano.pop_front();
	//Procura um vértice no ciclo euleriano cujo grau seja maior que 0
	int posRot=0;
	for(int i=0; i<cicloEuleriano.size(); i++)
		if(grau[ cicloEuleriano[i] ]>0){ posRot = i;
		inicioCiclo=cicloEuleriano[i]; break; }
	//Coloca o elemento com grau>0 presente no cicloEuleriano no início do ciclo
	rotate(cicloEuleriano.begin(), cicloEuleriano.begin() 
	+posRot, cicloEuleriano.end());
	//Põe no final do ciclo o elemento inicial
	cicloEuleriano.push_back( cicloEuleriano[0] );
	//Tira o elemento inicial que será usado para encontrar o próximo ciclo
	cicloEuleriano.pop_front();
}
void remove_aresta(int u, int v, int lb){
	for(int i=0; i<grau[u]; i++){
		if(va[u][i].label == lb){
			grau[u]--;
			va[u][i].dest = va[u][ grau[u] ].dest;
			va[u][i].label = va[u][ grau[u] ].label;
			break;
	}
}
	for(int i=0; i<grau[v]; i++){
		if(va[v][i].label == lb){
			grau[v]--;
			va[v][i].dest = va[v][ grau[v] ].dest;
			va[v][i].label = va[v][ grau[v] ].label;
			break;
	}
}
	nar--; //decrementa o número de arestas
}
void get_ciclo_euleriano(int u){
	int prox, lb;
	//ainda não achou o ciclo achouCiclo=0;
	// se o grafo não tem arestas, termina
	if(nar==0) return;
	//Enquanto não achou um ciclo euleriano
	while(achouCiclo==0){
		//Insere o vértice no ciclo
		cicloEuleriano.push_front(u);
		//Obtém o próximo vértice do ciclo
		prox = va[u][0].dest;
		lb = va[u][0].label;
		//Remove a aresta do vértice
		remove_aresta(u, prox, lb);
		//atribui ao u o prox
		u = prox;
		//Se o vértice destino da aresta sendo visitada é igual ao
		vértice inicial
		if(u==inicioCiclo)
			achouCiclo=1; //encontrou um ciclo
	}
	//Coloca no cicloEuleriano o vértice inicial novamente, fechando o ciclo
	cicloEuleriano.push_front(u);
}
/* Verifica se o grafo possui ciclo euleriano.
1. Se o grafo não é conexo, termina.
2. Se possui vértice com grau ímpar, termina.
3. Encontra o primeiro ciclo euleriano partindo de u.
4. Se não encontrar um vértice no ciclo euleriano com
grau>1, termina. Senão,
atribui o vértice encontrado à variável inicioCiclo
5. u = inicioCiclo
6. Volta ao passo 3.
*/
void ciclo_euleriano(int u){
	//Verifica se o grafo é conexo
	if(eh_conexo(u)==false){ return; }
		//Verifica se existe algum vértice com grau ímpar
		for(int i=0; i<MAX_V; i++)
			if(vertice_presente[i]==1 && grau[i]%2!=0){ return; }
		//Limpa o ciclo euleriano
		cicloEuleriano.clear();
		inicioCiclo=u;
		while(1){
			//Não achou ciclo
			achouCiclo = 0;
			//Obtém o ciclo euleriano começando em inicioCiclo
			get_ciclo_euleriano(inicioCiclo);
			//Se acabaram as arestas
			if(nar==0) return;
			//Rotaciona o ciclo e encontra o novo inicioCiclo
			rotacionaCiclo();
	}
}
int main(){
	int t, n, u, v;
	scanf("%d", &t);
	for(int iT=0; iT<t; iT++){
		scanf("%d", &n);
		ini_grafo();
		for(int iN=0; iN<n; iN++){
			scanf("%d %d", &u, &v);
			aresta(u, v);
		}
		ciclo_euleriano(u);
		printf("Case #%d\n",iT+1);
		if(cicloEuleriano.size()==0)
			printf("some beads may be lost\n");
		else
		for(int iC=0; iC< cicloEuleriano.size() - 1; iC++)
			printf("%d %d\n",cicloEuleriano[iC],
		cicloEuleriano[iC+1]);
		if(iT!=t-1)
			printf("\n");
	}
}
```
## 6. Programação Dinâmica
### 6.1. Longest Increasing Subsequence - LIS
- testado com o problema 497
- Obs.: algoritmo encontra a maior subsequência crescente em um vetor
```cpp
int length[MAX_V]; // armazena o comprimento maximo na posição
int p[MAX_V]; // pai
int v[MAX_V]; // vetor com a sequência
int n;
void lis(){
	for(int i=0; i<n; i++)
		length[i] = 1;
	memset(p, -1, sizeof(p));
	for(int i=0; i<n-1; i++)
		for(int j=i+1; j<n; j++)
			if(v[j] > v[i])
				if(length[i] + 1 > length[j]){
					length[j] = length[i] + 1;
					p[j] = i;
			}
}
```
### 6.2. Longest Common Subsequence - LCS
- testado com o problema 11151
- Obs.: algoritmo encontra a maior subsequência comum entre duas strings
```cpp
int table[MAX_V][MAX_V];
char a[MAX_V], b[MAX_V];
int lcs(){
	int m, n;
	m = strlen(a); n = strlen(b);
	for(int i=0; i<m; i++)
		for(j=0; j<n; j++)
			table[i][j]=0;
	for(int i=1; i<m+1; i++)
		for(int j=1; j<n+1; j++)
			if(a[i-1]==b[j-1])
				table[i][j] = table[i-1][j-1]+1;
			else
				table[i][j] = MAX(table[i][j-1], table[i-1][j]);
	return table[m][n];
}
void printPath(int i, int j){
	if(i == 0 || j==0)
		return;
	if(a[i-1] == b[j-1]){
		printPath(i-1, j-1);
		printf("%c", a[i-1]);
	}
	else if(table[i-1][j] <= table[i][j-1])
		printPath(i, j-1);
	else
		printPath(i-1, j);
}
```
### 6.3. Matrix Chain Multiplication - MCM
- testado com o problema 348
```cpp
int m[MAX_V][MAX_V]; // custos
int s[MAX_V][MAX_V]; // caminho
int p[MAX_V]; // dimensões das matrizes
void initializeMcm(int n){
	for(int i=1; i<n+1; i++)
		for(int j=i; j<n+1; j++)
			m[i][j] = INF;
}
void printPath(int i, int j){
	if(i==j)
		cout << "A" << i;
	else{
		cout << "("; printPath(i,s[i][j]);
		cout << " x "; printPath(s[i][j]+1, j);
		cout << ")";
	}
}
int mcm(int i, int j){ // primeira chamada: mcm(1, n)
	int k, q;
	if(m[i][j] < INF)
		return m[i][j];
	if(i == j)
		m[i][j] = 0;
	else
		for(int k=i; k<j; k++){
			q = mcm(i,k) + mcm(k+1,j) + p[i-1]*p[k]*p[j];
		if(q < m[i][j]){
			m[i][j] = q; s[i][j] = k;
		}
	}
	return m[i][j];
}
```
### 6.4. Knapsack - problema da mochila binária
- testado com o problema 10130
```cpp
int c[MAX_V][MAX_V];
int weight[MAX_V], price[MAX_V];
void knapsack(int n, int w){
	for(int i=0; i<n+1; i++) c[i][0] = 0; // para todos produtos
		for(int i=0; i<w+1; i++) c[0][i] = 0; // para todos pesos
			for(int i=1; i<n+1; i++)
				for(int j=1; j<w+1; j++)
					if(weight[i] > j)
						c[i][j] = c[i-1][j];
					else
						c[i][j] = MAX(c[i-1][j],
	c[i-1][j-weight[i]] + price[i]);
}
```
### 6.5. Edit Distance
- testado com o problema 526
- Entrada: Duas strings
- Saída: O menor custo (em termos de remoção, alteração, inserção) para transformar a primeira string na segunda
- Obs: Índices das strings iniciam em 1, sendo str[0]=' '
```cpp
#define MATCH 0
#define INSERT 1
#define DELETE 2
#define MAXLEN 1000
typedef struct{
	int c; //custo
	int p; //pai
}TCelula;
TCelula m[MAXLEN+1][MAXLEN+1]; //tabela da programacao dinamica
char s[MAXLEN], t[MAXLEN]; //strings de entrada
int comparaStrings(){
	int i, j, k, opt[3];
	for(i=0; i<MAXLEN; i++){
		m[0][i].c = m[i][0].c = i;
		m[0][i].p = INSERT;
		m[i][0].p = DELETE;
	}
	m[0][0].p = -1;
	for(i=1; i<strlen(s); i++)
		for(j=1; j<strlen(t); j++){
			//os custos podem ser alterados aqui.
			opt[MATCH] = m[i-1][j-1].c +
			(s[i]==t[j] ? 0 : 1); //c = 0 ou 1
			opt[INSERT] = m[ i ][j-1].c + 1; //deleta t[j], c = 1
			opt[DELETE] = m[i-1][ j ].c + 1; //deleta s[i], c = 1
			//Agora começa a escolha da opção menos custosa...
			m[i][j].c = opt[MATCH]; m[i][j].p = MATCH;
			for(k = INSERT; k<=DELETE; k++)
				if(opt[k] < m[i][j].c){
					m[i][j].c = opt[k]; m[i][j].p = k;
		}
	}
	i = strlen(s) - 1;
	j = strlen(t) - 1;
	return( m[i][j].c );
}
// deve ser chamado com i = strlen(s) - 1 e j = strlen(t) - 1;
void reconstroiCaminho(int i, int j){
	if( m[i][j].p == -1 ) 
		return;
	if( m[i][j].p == MATCH ){
		reconstroiCaminho(i-1, j-1);
		if(s[i]==t[j]) 
			printf("M"); //match!
		else 
			printf("S"); //substitution
		return;
	}
	if( m[i][j].p == INSERT ){
		reconstroiCaminho(i, j-1);
		printf("I");
		return;
	}
	if( m[i][j].p == DELETE ){
		reconstroiCaminho(i-1, j);
		printf("D");
		return;
	}
}
int main(){
	int i, j;
	s[0] = t[0] = ' '; //char em 0 nas strings deve ser ' '
	while(true){
		gets(&(s[1]));
		if(feof(stdin))
			break;
		gets(&(t[1]));
		printf("Menor custo para transformar %s em %s: %d
		\n", &(s[1]), &(t[1]), comparaStrings());
		i = strlen(s) - 1; j = strlen(t) - 1;
		reconstroiCaminho(i, j);
		printf("\n");
	}
return 0;
}
```
### 6.6. Máxima soma de subconjunto <= N
- testado com o problema 624
- Algoritmo para calcular a soma que mais se aproxima de um valor dado.
- Entrada: Vetor de inteiros e a soma n
- Saída: Maior soma possível <= n
- Imprime os números caso necessário
```cpp
map<pair<int, int>, int > tem_sucessor;
map<pair<int, int>, pair<int, int> > sucessor;
map<pair<int, int>, int> cache;
map<pair<int, int>, int> esta_em_cache;
int max_qtd(int n, int i, const VI &ele){
	if(n<=0 || i<=0 || ele.size()==0)
		return 0;
	if(esta_em_cache[make_pair(n,i)]==1)
		return cache[make_pair(n,i)];
	int aux, maximo=0, iMaximo=-1;
	for(int k=0; k<ele.size(); k++){
		VI temp = ele; temp.erase(temp.begin()+k);
		aux=0;
		if(ele[k]<=n)
			aux=ele[k] + max_qtd(n-ele[k], i-1, temp);
		if(aux>maximo)
			maximo=aux, iMaximo=k;
	}
	if(iMaximo>=0){
		sucessor[make_pair(n,i)]=make_pair(n-ele[iMaximo], i-1);
		tem_sucessor[make_pair(n,i)]=1;
	}
	esta_em_cache[make_pair(n,i)] = 1;
	return (cache[make_pair(n,i)]=maximo);
}
void imprimeSol(int n, int t){
	int auxN, auxT;
	while(tem_sucessor[make_pair(n,t)]==1){
		cout<<n-sucessor[make_pair(n,t)].first<<" ";
		auxN=sucessor[make_pair(n,t)].first;
		auxT=sucessor[make_pair(n,t)].second;
		n=auxN;
		t=auxT;
	}
}
int main(){
	while(1){
		int n, t, aux;
		vector<int> durations;
		if(!(cin>>n))
			return 0;
		cin>>t;
		for(int i=0; i<t; i++)
			cin>>aux, durations.push_back(aux);
		sucessor.erase(all(sucessor));
		cache.erase(all(cache));
		esta_em_cache.erase(all(esta_em_cache));
		tem_sucessor.erase(all(tem_sucessor));
		int maximo = max_qtd(n, t, durations);
		imprimeSol(n, t);
		cout<<"sum:"<<maximo<<endl;
	}
	return 0;
}
```
### 6.7. Coins Change
- Algoritmo retorna o número mínimo de moedas necessárias para um troco.
- Na configuração abaixo, usando money=7 retornaria duas moedas (3 + 4).
- Caso tivesse utilizado um algoritmo guloso a resposta seria errada, retornariam 3 moedas (5 + 1 + 1). Abaixo duas versões, a primeira com memoization e a segunda com DP.
```cpp
int coins[] = {1, 3, 4, 5}, coins_length = 4;
int minCoins[MAX];
int coinsChangeMemo(int money){
	if(minCoins[money] > 0)
		return minCoins[money];
	if(money == 0)
		return 0;
	int v = INF;
	for(int c=0; c<coins_length; c++){
		if(coins[c] > money) continue;
		v = min(v, coinsChangeMemo(money - coins[c]) + 1);
	}
	return minCoins[money] = v;
}
int coinsChangeDP(int money){
	minCoins[0] = 0;
	for(int m=1; m <= money; m++){
		minCoins[m] = INF;
		for(int c=0; c<coins_length; c++){
			if(coins[c] > money) continue;
			minCoins[m] = min(minCoins[m], minCoins[m - coins[c]] + 1);
		}
	}
return minCoins[money];
}
```
### 6.8. Coins Ways
- Algoritmo retorna o número de maneiras de contar um dinheiro usando as moedas disponíveis.
- Testado com o problema 674
```cpp
#define MAXMONEY 7500 // máximo dinheiro que pode trocar
#define MAXCOINS 5 // máximo número de moedas
int ways[MAXMONEY + 1];
int moedas[MAXCOINS] = { 50, 25, 10, 5, 1 }; //vetor ordenado
void coinsWays(){
	int c;
	ways[0] = 1;
	for(int i=1; i<=MAXMONEY; i++)
		ways[i]=0;
	for(int i=0; i<MAXCOINS; i++){
		c = moedas[i];
	for(int j=c; j<=MAXMONEY; j++)
		ways[j] += ways[j-c];
	}
}
int main(){
	int money;
	coinsWays();
	while(cin>>money)
	printf("%llu\n", ways[money]);
}
```
### 6.9. Maximum Interval Sum
- Algoritmo encontra maior soma contínua em um array v[1-n].
- Armazena o intervalo [a-b] e o valor máximo da soma.
- Obs.: array deve começar a partir da posição 1
```cpp
#define MAXSIZE 20003
int v[MAXSIZE];
void maxIntervalSum(int n, int &a, int &b, int &maxSum){
	int max[MAXSIZE], start[MAXSIZE];
	for(int i=1; i<=n; i++)
		max[i] = start[i] = 0;
	start[0] = 1;
	for(int i=1; i<=n; i++)
		if(max[i-1] >= 0){
			max[i] += max[i-1] + v[i];
			start[i] = start[i-1];
	} else {
			max[i] += v[i];
			start[i] = i;
	}
	b = 1;
	for(int i=2; i<=n; i++)
	if(max[i] > max[b])
	b = i;
	a = start[b];
	maxSum = max[b];
}
int v[10] = { -INF, -2, 1, -3, 4, -1, 2, 1, -5, 4};
int a, b, maxSum;
maxIntervalSum(9, a, b, maxSum);
//retorna: a = 4, b = 7, maxSum = 6
```
### 6.10. Mochila Fracionária
```cpp
/* Recebe como parametros o numero de objetos n,
o array de objetos com seus respectivos pesos e valores,
e a capacidade W da mochila */
double mochilaFracNlogN(int n, Object * obj, int W){
	double weight = 0.0; // Peso armazenado na mochila
	double total = 0.0; // Valor total armazenado na mochila
	int i;
	// Ordena os objetos com relacao a razao entre valor/peso
	qsort(obj, n, sizeof(Object), ratioCmp);
	/* Coloca o maior numero de objetos de forma completa na
	mochila, em ordem de razao valor/peso */
	for(i=0; i<n; i++){
		/* Caso nao seja possivel colocar o objeto atual na
		mochila, entao sai do laco */
		if(obj[i].weight + weight > W)
			break;
		obj[i].frac = 1.0; // Coloca todo o objeto i na mochila
		total += obj[i].value; // Atualiza o valor total
		weight += obj[i].weight;// Atualiza o peso total
	}
	/* Se nem todos os objetos couberam na mochila,
	coloca apenas uma fracao do melhor objeto, em termos de
	valor/peso, ainda nao considerado */
	if(i < n){
		/* Coloca apenas a fracao possivel do objeto i */
		obj[i].frac = (W - weight)/(double)obj[i].weight;
		// Atualiza o valor total da mochila
		total += ((double) obj[i].value) * obj[i].frac;
	}
	return total;
}
```

## 7. Geometria
```cpp
#define X first
#define Y second
```
### Ponto:
```cpp
typedef pair<double, double> TPoint;
```
### Polígono:
```cpp
typedef vector< TPoint > TPolygon;
```
### Reta:
```cpp
typedef struct{
	double A, B, C;
}TLine;
```
### Circunferência:
```cpp
typedef struct{
	TPoint c;
	double r;
}Tball;
```
### 7.1. Distância de ponto a ponto
```cpp
double point_point_dist(TPoint a, TPoint b){
	return(sqrt( (a.X-b.X)*(a.X-b.X) + (a.Y-b.Y)*(a.Y-b.Y)));
}
```
### 7.2. Distância de ponto a reta
```cpp
/* Distância de ponto a reta
2*A = |AB|*h = |AxB| => h = |AxB|/|AB| */
double signed_point_line_dist(TPoint a, TPoint b, TPoint c){
	return (is_left(a,b,c)/point_point_dist(a,b));
}
```
### 7.3. Produto Escalar
```cpp
double prod_escalar(TPoint a, TPoint b, TPoint u, TPoint v){
	return ((b.X-a.X)*(v.X-u.X) + (b.Y-a.Y)*(v.Y-u.Y));
}
```
### 7.4. Produto Vetorial
```cpp
/* Produto vetorial entre ab e ac.
Retorna =0 se a, b, c sao colineares
>0 se ab é cw de ac (c está à esquerda de ab)
<0 se ab é ccw de ac (c está à direita de ab) */
double is_left(TPoint a, TPoint b, TPoint c){
	return ((b.X-a.X)*(c.Y-a.Y) - (c.X-a.X)*(b.Y-a.Y));
}
```
### 7.5. Área do triângulo com sinal
```cpp
/* Área de um triangulo com sinal
É o produto vetorial b-a e c-a dividido por 2 */
double signed_triangle_area(TPoint a, TPoint b, TPoint c){
	return (is_left(a,b,c)/2.0);
}
```
### 7.6. Dois pontos para equação da reta
```cpp
/* Transforma dois pontos em uma equação de reta
na forma Ax+By=C.
y=m*x+b -> -mx+y=b -> -(dy/dx)x+y=b ->
mult por dx -> (-dy)*x+(dx)*y=(dx)*b
entao, A=-dy; B=dx; C=A*x1 + B*x2 */
TLine points_to_line(TPoint a, TPoint b){
	TLine l;
	l.A=b.Y-a.Y;
	l.B=a.X-b.X;
	l.C=l.A*a.X+l.B*a.Y;
	return l;
}
```
### 7.7. Reta perpendicular à reta
```cpp
/* Retorna uma linha perpendicular à linha passada como
parametro, no ponto especificado.
Ax+By=C -> -Bx+Ay=D */
TLine line_perp(TLine l, TPoint p){
	TLine r;
	r.A = -l.B;
	r.B = l.A;
	r.C = r.A*p.X+r.B*p.Y;
	return r;
}
```
### 7.8. Ponto de intersecção entre duas retas
```cpp
/* Calcula ponto de intersecção de duas retas.
Retorna true se as retas se intersectam,
false caso sejam paralelas ou coincidentes. */
TPoint intersection_point(TLine l1, TLine l2){
	TPoint p;
	// Regra de CRAMER
	double D = l1.A*l2.B - l1.B*l2.A,
	Dx = l1.C*l2.B - l1.B*l2.C,
	Dy = l1.A*l2.C - l1.C*l2.A;
	// O sistema pode ter nenhuma ou infinitas soluções
	if(D==0) 
		return p; //linhas sao paralelas
	p.X = Dx/D;
	p.Y = Dy/D;
	return p;
}
```
### 7.9. Intersecção de segmentos
```cpp
/* Pre-conditions: point x is known to be collinear with
segment p1-p2
Return: true if x lies beetwen p1 and p2
false otherwise */
bool __onSegment(TPoint p1, TPoint p2, TPoint x){
	if( (x.X>=min(p1.X, p2.X) && x.X<=max(p1.X, p2.X)) && (x.Y>=min(p1.Y, p2.Y) && x.Y<=max(p1.Y, p2.Y)) )
		return true;
	return false;
}
/* Return: true if segments p1-p2 and p2-p3 intersect
false otherwise */
bool segmentsIntersect(TPoint p1, TPoint p2, TPoint p3, TPoint p4){
	double d1, d2, d3, d4;
	d1 = is_left(p3, p4, p1);
	d2 = is_left(p3, p4, p2);
	d3 = is_left(p1, p2, p3);
	d4 = is_left(p1, p2, p4);
	if( ((d1>0&&d2<0) || (d1<0&&d2>0)) &&
	((d3>0&&d4<0)||(d3<0&&d4>0)) ) return true;
	if( !d1 && __onSegment(p3, p4, p1) ) return true;
	if( !d2 && __onSegment(p3, p4, p2) ) return true;
	if( !d3 && __onSegment(p1, p2, p3) ) return true;
	if( !d4 && __onSegment(p1, p2, p4) ) return true;
	return false;
}
```
### 7.10. Centro da circunferência dado 3 pontos
```cpp
/* Retorna o centro de uma circunferencia dado 3 ptos.
Encontra a linha perpendicular à ab e à bc. Calcula o pto
de intersecção entre elas, q eh o centro da circunferencia.
Os 3 ptos nao podem ser colineares!.*/
TBall points_to_ball(TPoint a, TPoint b, TPoint c){
	TBall ball;
	TPoint p_ab, p_bc;
	TLine l_ab, l_bc, l_perp_ab, l_perp_bc;
	l_ab = points_to_line(a,b);
	l_bc = points_to_line(b,c);
	p_ab.X = (a.X+b.X)/2.0;
	p_ab.Y = (a.Y+b.Y)/2.0;
	p_bc.X = (b.X+c.X)/2.0;
	p_bc.Y = (b.Y+c.Y)/2.0;
	l_perp_ab = line_perp(l_ab, p_ab);
	l_perp_bc = line_perp(l_bc, p_bc);
	ball.c = intersection_point(l_perp_ab, l_perp_bc);
	ball.r = point_point_dist(ball.c, a);
	return ball;
}
```
### 7.11. Distância esférica
```cpp
#define RADIUS 6378 /* raio da esfera */
#define PI 3.141592653589793
//Primeiro algoritmo
long double spherical_distance(long double p_lat,
long double p_long, long double q_lat, long double q_long){
	return (acos(sin(p_lat)*sin(q_lat) +
	cos(p_lat)*cos(q_lat)*cos(p_long)*cos(q_long) +
	cos(p_lat)*cos(q_lat)*sin(p_long)*sin(q_long))*RADIUS);
}
//Algoritmo alternativo
double spherical_distance(double lat1,double lon1,
double lat2,double lon2) {
	double dlon = lon2 - lon1;
	double dlat = lat2 - lat1;
	double a = pow((sin(dlat/2)),2) +
	cos(lat1) * cos(lat2) * pow(sin(dlon/2), 2);
	double c = 2 * atan2(sqrt(a), sqrt(1-a));
	double d = RADIUS* c;
	return d;
}
```
### 7.12. Ponto no polígono
```cpp
bool __onSegment(TPoint p1, TPoint p2, TPoint x){
	if( (x.X>=min(p1.X, p2.X) && x.X<=max(p1.X, p2.X)) &&
	(x.Y>=min(p1.Y, p2.Y) && x.Y<=max(p1.Y, p2.Y)) )
		return true;
	return false;
}
/* Verifica se um pto pertence ou nao a um poligono.
Traça uma reta do ponto até infinito e conta o numero de
vezes que corta a borda do poligono. Se for par, retorna
zero (fora), se for impar retorna um (dentro) e se estiver
na borda retorna dois.
Casos especiais: reta infinita cruza um vertice
OBS: ESTE ALGORITMO FUNCIONA APENAS PARA POLIGONO COM
ARESTAS VERTICAIS E HORIZONTAIS!! (por causa do caso
especial citado acima) */
int point_in_polygon(TPolygon h, TPoint a){
	TPoint b; //extremidade da reta a-b
	int c=0;
	b.X = 11000; //X INFINITO
	b.Y = 0; //Y INFINITO
	for(int i=0; i<h.size(); i++){
		//verifica se está na borda
		if(is_left(h[i], h[(i+1)%h.size()], a)==0 &&
		__onSegment(h[i], h[(i+1)%h.size()], a) )
			return 2; //BORDA
		// Se a reta inf. cruza uma aresta do poligono e nao cruza um vertice do poligono
		if(segmentsIntersect(h[i], h[(i+1)%h.size()], a, b))
			c++;
	}
	return c%2;
}
```
### 7.13. Área do Polígono
```cpp
//We will triangulate the polygon
//into triangles with points p[0],p[i],p[i+1]
double polygon_area(TPolygon p){
	double area=0.0, cross;
	for(int i = 1; i+1 < p.size(); i++){
		double x1 = p[i].X - p[0].X;
		double y1 = p[i].Y - p[0].Y;
		double x2 = p[i+1].X - p[0].X;
		double y2 = p[i+1].Y - p[0].Y;
		cross = x1*y2 - x2*y1;
		area += cross;
	}
	return ABS(area/2.0);
}
```
### 7.14. Convex Hull
```cpp
TPoint first_point;
/* Compara os angulos formados por first_point-a e
first_point_b. A ordenacao deve ser do maior angulo para o
menor angulo (formado com o eixo y).
Caso 2 ptos possuam o mesmo angulo, pega o pto mais
distante */
bool __smaller_angle(const TPoint &a, const TPoint &b){
	if(is_left(first_point, a, b)==0)
		if(point_point_dist(first_point,a)<=point_point_dist(first_point,b))
			return false;
		else
			return true;
	if(is_left(first_point, a, b)>0)
		return false;
	return true;
}
struct __menorQue{
	bool operator()(const TPoint& a, const TPoint& b){
	if(a.Y<b.Y) return true;
	if(a.Y>b.Y) return false;
	if(a.X<b.X) return true;
	if(a.X>b.X) return false;
	return false;
}
};
/* Convex hull - Algoritmo de Graham Scan
Recebe como parâmetro uma lista de pontos, os quais podem
ter ptos duplicados.
Retorna caso n>3 um poligono, com seus ptos seguindo a
direcao horaria.
O primeiro elemento é o ultimo elemento do hull. {(1,1),
(1,2),(2,2),(2,1),(1,1)} caso n<3 retorna os mesmos pontos. */
void convex_hull(vector< TPoint > &in, TPolygon &hull){
	int i, top;
	// Ordena os pontos e remove ptos duplicados
	set< TPoint, __menorQue > tempSet(ALL(in));
	in.erase(ALL(in));
	vector< TPoint > p(ALL(tempSet));
	//Pivô
	first_point = p[0];
	//Ordena de acordo com os angulos formados com o pivô
	sort(p.begin()+1, p.end(), __smaller_angle);
	if(p.size()<=2){
		for(int i=0; i<p.size(); i++)
		hull.push_back(p[i]);
		//hull.push_back(p[0]);
		return;
	}
	hull.push_back(p[0]);
	hull.push_back(p[1]);
	p.push_back(first_point); // copia o primeiro pto no
	final, para qdo der a volta completa
	top=1; //Topo da pilha dos ptos
	i=2;
	//Percorre os ptos ordenados
	while(i<p.size()){
		if(is_left(hull[top-1],hull[top],p[i])>=0){ //Permite
		que só vire à direita
		top--;
		hull.pop_back();
	}
		else{
		top++;
		hull.push_back(p[i]);
		i++;
		}
	}
}
int main(){
	TPolygon hull;
	vector< TPoint > in;
	int n;
	double x,y;
	while(scanf("%d", &n)==1){
		in.erase(ALL(in));
		hull.erase(ALL(hull));
		for(int i=0; i<n; i++){
		scanf("%lf %lf", &x, &y);
		in.push_back(make_pair(x,y));
	}
	convex_hull(in, hull);
	for(int i=0; i<hull.size(); i++)
		printf("%lf %lf\n", hull[i].X, hull[i].Y);
	printf("\n");
	}
	return 0;
}
```
## 8. Matemática Geral
### 8.1. Primalidade
```cpp
int isPrime(int n){
	if(n == 2 || n == 3)
		return 1;
	if(n <= 1 || n%2 == 0)
		return 0;
	for(int i=3; i*i <= n; i += 2)
		if(n%i == 0)
			return 0;
	return 1;
}
```
### 8.2. Exponenciação
```cpp
long square(long n) { return n*n; }
	//Maneira eficiente de calcular a^n
	long fastexp(long base, long power) {
		if(power == 0) return 1;
			if(power%2 == 0) return square(fastexp(base,power/2));
				return base*(fastexp(base,(power-1) ));
	}
	int main(){
		long k, n, p;
		while(cin>>n>>p){
			cout << fastexp(n, p ) << endl;
		}
		return 0;
}
```
### 8.3. BigInt
```cpp
const int DIG = 4;
const int BASE = 10000;
const int TAM = 2048;
struct bigint{
	int v[TAM], n;
	bigint(int x = 0): n(1){
		memset(v, 0, sizeof(v));
	v[n++] = x; fix();
}
bigint(char *s): n(1){
	memset(v, 0, sizeof(v));
	int sign = 1;
	while(*s && !isdigit(*s)) if(*s++ == '-') sign *= -1;
	char *t = strdup(s), *p = t + strlen(t);
	while(p > t){
		*p = 0; p = MAX(t, p - DIG);
		sscanf(p, "%d",&v[n]);
		v[n++] *= sign;
	}
	free(t); fix();
}
bigint& fix(int m = 0){
	n = MAX(m,n);
	int sign = 0;
	for(int i=1, e=0; i<=n || e && (n = i); i++){
		v[i] += e; e = v[i]/BASE; v[i] %= BASE;
		if(v[i]) sign = (v[i] > 0) ? 1 : -1;
	}
	for(int i = n-1; i > 0; i--)
		if(v[i]*sign < 0){ v[i] += sign*BASE; v[i+1] -= sign;}
	while(n && !v[n]) n--;
		return *this;
}

bool operator <(const bigint& x) const { return cmp(x) < 0; }
bool operator ==(const bigint& x) const { return cmp(x) == 0; }
bool operator !=(const bigint& x) const { return cmp(x) != 0; }

operator string() const{
	ostringstream s; s << v[n];
	for(int i = n - 1; i > 0; i--){
		s.width(DIG); s.fill('0'); s << ABS(v[i]);
	}
	return s.str();
}
friend ostream& operator <<(ostream& o, const bigint& x){
	return o << (string) x;
}
bigint& operator +=(const bigint& x){
	for(int i = 1; i <= x.n; i++) v[i] += x.v[i];
	r	eturn fix(x.n);
}
bigint operator +(const bigint& x){
	return bigint(*this) += x;
}

bigint& operator -=(const bigint &x){
	for(int i = 1; i <= x.n; i++) v[i] -= x.v[i];
		return fix(x.n);
}
bigint operator -(const bigint& x){ return bigint(*this) -= x; }

bigint operator -(){ bigint r = 0; return r -= *this; }

void ams(const bigint& x, int m, int b){
// *this += (x * m) << b;
	for(int i = 1, e = 0; (i <= x.n || e) && (n = i + b); i++){
		v[i+b] += x.v[i] * m + e; e = v[i+b]/BASE; v[i+b] %= BASE;
	}
}
bigint operator *(const bigint& x) const {
	bigint r;
	for(int i = 1; i <= n; i++) r.ams(x, v[i], i-1);
		return r;
}
bigint& operator *=(const bigint& x){return *this = *this * x; }

bigint& operator /=(const bigint& x){ return *this = div(x); }

bigint& operator %=(const bigint& x){ div(x); return *this; }

bigint operator /(const bigint& x){
	return bigint(*this).div(x); 
}
bigint operator %(const bigint& x){ return bigint(*this) %= x; }

bigint div(const bigint& x){
	if(x == 0) return 0;
		bigint q; q.n = MAX(n - x.n + 1, 0);
	int d = x.v[x.n] * BASE + x.v[x.n-1];
		for(int i = q.n; i > 0; i--){
			int j = x.n + i -1;
	q.v[i] = int((v[j] * double(BASE) + v[j-1])/d);
	ams(x, -q.v[i], i-1);
	if(i == 1 || j == 1) break;
		v[j-1] += BASE * v[j]; v[j] = 0;
	}
	fix(x.n); return q.fix();
}
bigint pow(int x){
	if(x < 0) return (*this == 1 || *this == -1) ? pow(-x) : 0;
		bigint r = 1;
	for(int i = 0; i < x; i++) r *= *this;
		return r;
}

bigint root(int x){
	if(cmp() == 0 || cmp() < 0 && x%2 == 0) return 0;
	if(*this == 1 || x == 1) return *this;
	if(cmp() < 0) return -(-*this).root(x);
	bigint a = 1, d = *this;
	while(d != 1){
		bigint b = a + (d /= 2);
		if(cmp(b.pow(x)) >= 0){ 
			d += 1; a = b;
		}
	}
	return a;
	}
};
```

### 8.4. Módulo com BigInt
- Cada dígito do número é armazenado no vetor. No exemplo abaixo
- retorna true caso seja divisível por 4.
```cpp
int nbr[MAX];
int len;
bool div4(){
	int d = 0, rem;
	for(int i=0; i<len; i++){
		rem = (d*10 + nbr[i])%4;
		d = rem;
	}
	if(d == 0)
		return true;
	return false;
}
```

### 8.5. BigMod
```cpp
/* Esse algoritmo calcula r = b^p mod n. Recebe como parametros
b, p e n, retornando r.
Esse algoritmo se baseia na idéia: (A*B*C) mod N == ((A mod
N) * (B mod N) * (C mod N)) mod N. */
unsigned long long square(unsigned long long x){
	return x*x;
}
unsigned long long bigMod(unsigned long long b, unsigned long
long p, unsigned long long m){
	if(p == 0)
		return 1;
	if(p%2 == 0) // square(x) = x * x
		return square(bigMod(b, p/2, m)) % m;
	return ((b % m) * bigMod(b, p-1, m)) % m;
}
int main(){
	unsigned long long b, p, m;
	while(cin>>b>>p>>m)
		cout<<bigMod(b, p, m)<<endl;
	return 0;
}
```

### 8.6. Combinatória C(n,k) com n e k grandes
```cpp
long gcd(long a,long b){
	if (a%b==0) return b;
		return gcd(b, a%b);
}
void Divbygcd(long& a,long& b){
	long g = gcd(a,b);
	a/=g; b/=g;
}
long C(int n,int k){
	long numerator=1, denominator=1, toMul, toDiv, i;
	if (k>n/2) k=n-k; /* use smaller k!!!, note C(10,6)==C(10,4)*/
	for (i=k; i; i--){
		toMul=n-k+i;
		toDiv=i;
		Divbygcd(toMul,toDiv);/* always divide before multiply */
		Divbygcd(numerator,toDiv);
		Divbygcd(toMul,denominator);
		numerator*=toMul;
		denominator*=toDiv;
	}
	return numerator/denominator;
}
int main(){
	long n, k;
	while(1){
	scanf("%ld %ld", &n, &k);
	printf("C(%ld, %ld)=%ld\n", n, k, C(n, k));
	}
}
```
### 8.7. Quantidade aproximada de primos <= N
```cpp
long arredonda(double x){
	double i, f;
	f = modf(x, &i);
	if(f>=0.5) return (unsigned long long)ceil(x);
		return (unsigned long long)i;
	}
	//Retorna a qtd de nros primos menores ou iguais a n
	long qtdNrosPrimos(long n){
		return arredonda(n/log(n));
}
```

### 8.8. Fibonacci com BigNum
```cpp
void inicializaBigNum(char *a){
	a[TAM_MAX-1] = '\0';
	for(int i=TAM_MAX-2; i>=0; i--) a[i] = '0';
}
void soma(char *a, char *b, char *result){
	int d1, d2, s, ch, carry=0;
	result[TAM_MAX-1] = '\0';
	for(int i= TAM_MAX-2; i>=0 ; i--){
		d1 = a[i];
		d2 = b[i];
		s = (d1 - '0') + (d2 - '0') + carry;
		ch = (s%10) + '0';
		carry = s/10;
		result[i] = ch;
	}
}
void inverte(char *str){
	unsigned long j, i;
	int ch;
	j = TAM_MAX-1;
	i = strlen(str);
	if( i==j ) return;
	while(i>=0)
		str[j--] = str[i--];
}
int main(){
	char a[TAM_MAX], b[TAM_MAX], f[TAM_MAX];
	unsigned long n, i;
	while( scanf("%ld", &n) == 1 ){
		inicializaBigNum(a);
		inicializaBigNum(b);
		inicializaBigNum(f);
		a[TAM_MAX-1] = '\0';
		a[TAM_MAX-2] = '1';
		b[TAM_MAX-1] = '\0';
		b[TAM_MAX-2] = '1';
		f[TAM_MAX-1] = '\0';
		f[TAM_MAX-2] = '1';
		for(i=3; i<=n; i++){
			//f(n) = f(n-1) + f(n-2)
			soma(a, b, f);
			strcpy(a, b);
			strcpy(b, f);
		}
		for(i = 0; i<TAM_MAX-1; i++)
			if(f[i]!='0') break;
			while(i<TAM_MAX-1)
				printf("%c", f[i++]), n++;
	}	
	return 0;
}
```

### 8.9. Manipulação de bits: Decimal para binário
```cpp
int main(){
	int n, d, aux, DES = 8 * (sizeof(int)) - 1, MASK = 1 << DES, i;
	while(cin>>n){
		i=0;
		while(i<sizeof(int)*8){
		i++;
		d = (n&MASK) ? 1:0;
		cout<<d<<"";
		if(!(i%8)) cout<<" ";
		n = (n<<1);
		}
	cout << endl;
	}
	return 0;
}
```
### 8.10. Crivo de Eratóstenes - Sieve
```cpp
// Super fast & Memory-tight Sieve by Yarin
#define MAXSIEVE 100000000 // All prime numbers up to this
#define MAXSIEVEHALF (MAXSIEVE/2)
#define MAXSQRT 5000 // sqrt(MAXSIEVE)/2
char a[MAXSIEVE/16+2];
#define isprime(n) (a[(n)>>4]&(1<<(((n)>>1)&7))) // Works when n is odd
//Does not verify 1 nor 2
//have to check for even numbers
void sieve(){
	int i,j;
	memset(a,255,sizeof(a));
	a[0]=0xFE;
	for(i=1;i<MAXSQRT;i++)
		if (a[i>>3]&(1<<(i&7)))
	for(j=i+i+i+1;j<MAXSIEVEHALF;j+=i+i+1)
		a[j>>3]&=~(1<<(j&7));
}
int ehPrimo(unsigned long long n){
	if(n<=1) return 0;
	if(n==2 || (n%2) && isprime(n)) return 1;
	return 0;
}
```

### 8.11. Segment Sieve - Números primos em um intervalo
- Obs: L<= U; retorna os números primos no intervalo [L, U]
```cpp
long long *primos, numprimos;
void segmentSieve(long long L,long long U) {
	long long i, j, d;
	d=U-L+1; // from range L to U, we have d=U-L+1 numbers.
	// use flag[i] to mark whether (L+i) is a prime number or not
	bool *flag = new bool[d];
	for (i=0; i<d; i++) flag[i]=true; // mark all true
		for (i=(L%2!=0); i<d; i+=2)
			flag[i]=false; // mark even numbers as false
	/* sieve by prime factors staring from 3 till sqrt(U) */
	for (i=3; i<=sqrt(U); i+=2) {
		if (i>L && !flag[i-L]) continue;
		/* choose the first number to be sieved -- >=L,
		divisible by i, and not i itself! */
		j=L/i*i;
		if (j<L) j+=i;
		if (j==i) j+=i; // if j prime, start from next one
		j-=L; /* change j to the index representing j */
		for (;j<d; j+=i) flag[j]=false;
	}
	/* mark 1 as false, 2 as true */
	if (L<=1) flag[1-L]=false;
	if (L<=2) flag[2-L]=true;
	/* output the result */
	primos = new long long [d];
	for (i=0, j=0; i<d; i++) if (flag[i]) primos[j++]=(L+i);
		numprimos=j;
}
```
### 8.12. Fatores Primos de um número
- Obs: Usa o segmentSieve
```cpp
#define MAX 47000
long long *primos, numprimos;

int main(){
	long long n, i;
	segmentSieve(1, MAX);
	while(cin>>n){
		if(n==0) break;
		cout<<n<<" =";
		if(n<0){ 
			cout<<" -1 x"; n = -n; 
		}
		i=0;
		while(true){
			while(n%primos[i]==0){
				cout<<" "<<primos[i];
				n=n/primos[i];
				if(n!=1)
					cout<<" x";
				}
				if(n<=1) break;
				i++;
				if(i>=numprimos){ 
					cout<<" "<<n; break; 
				}
			}
		cout<<endl;
	}
	return 0;
}
```

### 8.13. GCD
```cpp
long long gcd(long long a, long long b){
	if( b == 0)
		return a;
	return gcd(b,a%b);
}
```
### 8.14. GCD/LCM
```cpp
/* Encontra o gcd(p,q) pelo metodo de Euclides and x,y tal que
p*x + q*y = gcd(p,q)
Teorema: Se p e q são inteiros, nao sendo ambos 0, entao
o menor elemento positivo do conjunto { px + qy : x, y
pertencentes a Z}
O gcd(p, q) é uma combinacao linear.*/
long long gcd(long long p, long long q, long long &x, long long &y){
	long long x1,y1; /* previous coefficients */
	long long g; /* value of gcd(p,q) */
	if (q > p)
		return( gcd(q, p, y, x) );
	if(q == 0){
		x = 1;
		y = 0;
		return(p);
	}
	g = gcd(q, p%q, x1, y1);
	x = y1;
	y = (x1 - floor(p/q)*y1);
	return(g);
}

long long lcm(long long x, long long y){
	long long a, b;
	//calcula otimizado (x * (...))
	return ( x* (y/gcd(x, y, a, b)) );
}
/* Dois números são primos entre si se o gcd entre eles é 1 */
bool primosEntreSi(long long x, long long y){
	long long t, r;
	if(gcd(x, y, t, r)==1) return true;
	return false;
}
int main(){
long long x, y, p, q, d, m;
	while(cin>>x>>y){
		d = gcd(x, y, p, q);
		m = lcm(x, y);
		cout<<"gcd("<<x<<", "<<y<<")= "<<d<<endl;
		cout<<"p="<<p<<", "<<"q="<<q<<endl;
		cout<<"lcm("<<x<<", "<<y<<")= "<<m<<endl;
		if(primosEntreSi(x, y))
			cout<<"Sao primos entre si"<<endl;
		else
			cout<<"Nao sao primos entre si"<<endl<<endl;
	}
	return 0;
}
```

### 8.15. Método Newton-Raphson
- Método encontra a raiz de uma equação a partir da fórmula abaixo, onde x0 é um chute inicial, a precisão aumenta conforme a diferença entre x1 e x0 diminui. Método f calcula a f(x) no ponto x0, e método d calcula f’(x) no ponto x0.
```cpp
double f(double x0) { ... }
double d(double x0) { ... }
double newton_raphson(double x0){
	double x1;
	double diff = 1.0;
	while(diff > EPS){
		x1 = x0 - (f(x0)/d(x0));
		diff = abs(x1 - x0);
		x0 = x1;
	}
	return x1;
}
```

## 9.Busca
### 9.1. Knuth-Morris-Pratt
- Algoritmo procura por uma substring P em uma string S.
- Retorna o índice inicial que corresponde ao padrão em S, caso não encontre retorna -1. Testado com o problema 11475.
- S=ABCADEGH P=ADE => retorna 3
```cpp
int a[MAX], n, m;
char S[MAX], P[MAX];
void calculatePrefix() {
	int i = 0, j = -1;
	a[0] = -1;
	while(i < m){
		while (j >= 0 && P[i] != P[j])
			j = a[j];
			i++; j++;
			a[i] = j;
		}
}
int KMP(){
	int i = 0, j = 0;
	calculatePrefix();
	while(i < n){
	while(j >= 0 && S[i] != P[j])
		j = a[j];
		j++; i++;
		if(j == m)
			return i - m;
	}
	return -1;
}
```
### 9.2. Binary Search
- Busca pelo elemento key no vetor ordenado, retorna o índice do vetor, caso não encontre o elemento retorna -1.
```cpp
int v[MAX];
int binarySearch(int start, int end, int key){
	if(start > end)
		return -1;
	int mid = (start + end)/2;
	if(v[mid] > key)
		return binarySearch(start, mid-1, key);
	if(v[mid] < key)
		return binarySearch(mid + 1, end, key);
	return mid;
}
```
### 9.3. Ternary Search
```cpp
//Função que deverá ser encontrado a solução máxima/mínima
double f(double x){ }
/* Função para encontrar máximo/mínimo em um intervalo.
A função deve ser estritamente crescente e em seguida
estritamente decrescente, ou vice versa (Forma um bico,
que é a solução ótima. */
double ternarySearch(double right, double left){
	if(right-left < EPS) return (left+right)/2.0;
	double leftThird = (left*2.0 + right)/3.0;
	double rightThird = (left + right*2.0)/3.0;
	if(f(leftThird) < f(rightThird))
		return ternarySearch(leftThird, right);
	else
		return ternarySearch(left, rightThird);
}
```
### 9.4. Segment Tree
- Algoritmo encontra o índice com o maior ou menor valor no intervalo [i..j] do vetor A e armazena em M. Abordagem utiliza estrutura de dados que constrói um árvore binária semelhante a um heap, onde cada nó armazena o índice no intervalo.
- Para executar o algoritmo é preciso construir a árvore chamando a função build_segment_tree e depois realizar consultas com a função query.
- Testado com o problema 11235
```cpp
int M[MAX], A[MAX];
void build_segment_tree(int node, int start, int end){
	if(start == end)
		M[node] = start;
	else {
		int left = 2*node;
		int right = 2*node + 1;
		int mid = (start+end)/2;
		build_segment_tree(left, start, mid);
		build_segment_tree(right, mid+1, end);
		if(A[M[2*node]] >= A[M[(2*node)+1]])
			M[node] = M[2*node];
		else
			M[node] = M[(2*node)+1];
	}
}
int query(int node, int start, int end, int i, int j){
	int p1, p2;
	if(i > end || j < start)
		return -1;
	if(start >= i && end <= j)
		return M[node];
	int left = node*2;
	int right = node*2 + 1;
	int mid = (start + end)/2;
	p1 = query_segment_tree(left, start, mid, i, j);
	p2 = query_segment_tree(right, mid+1, end, i, j);
	if( p1 == -1)
		return p2;
	if( p2 == -1)
		return p1;
	if( A[p1] >= A[p2] )
		return p1;
	return p2;
}
int A[] = {8,7,3,9,14,1,10};
build_segment_tree(1,0,6);
query(1,0,6,2,5);
// retorna índice do maior elemento no intervalo [2-5], portanto, o resultado é 4.
```

