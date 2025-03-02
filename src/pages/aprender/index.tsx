import * as React from 'react'
import { Link } from 'gatsby'
import Seo from '../../components/seo'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

const BlogPage = () => {
    return (
        <>
            <NavBar />
            <div className="bg-gradient-to-br from-blue-700 to-blue-400">
                <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 pt-20">
                    <div className="flex flex-wrap items-center justify-between mb-8">
                        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl text-white">
                            Aprenda Programação Competitiva 
                        </h2>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/01-introducao">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                                Introdução
                                            </p>
                                            <p className="mb-4">
                                                Dê o primeiro passo no mundo da programação competitiva!
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/02-stl">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                                Standard Template Library
                                            </p>
                                            <p className="mb-4">
                                                Biblioteca do C++ que fornece estruturas de dados e algoritmos genéricos, como vetores, listas, filas, pilhas e conjuntos, otimizando a manipulação de dados.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/03-forca-bruta-recursao-backtracking">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                            Força bruta, recursão e backtracking
                                            </p>
                                            <p className="mb-4">
                                            Pertencem à família de algoritmos exaustivos, que exploram todas as possibilidades até encontrar uma solução.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/04-algoritmo-guloso-divisao-conquista">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                                Algoritmo Guloso, Divisão e Conquista
                                            </p>
                                            <p className="mb-4">
                                                Fazem parte da família de estratégias heurísticas e recursivas, onde guloso escolhe a melhor opção localmente e divisão e conquista resolve problemas dividindo-os em subproblemas menores.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                         <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/05-programacao-dinamica">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                                Programação Dinâmica
                                            </p>
                                            <p className="mb-4">
                                                Técnica de otimização que resolve problemas dividindo-os em subproblemas sobrepostos, armazenando soluções intermediárias para evitar cálculos redundantes.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                         <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/06-arvores">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                                Árvores
                                            </p>
                                            <p className="mb-4">
                                                Estruturas de dados hierárquicas usadas para armazenar e organizar dados, como árvores binárias, AVL e Trie, úteis para buscas e ordenação.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/07-disjoint-set-union-find">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                                Disjoint-set (Union-find)
                                            </p>
                                            <p className="mb-4">
                                                Estrutura de dados eficiente para manipular conjuntos disjuntos, usada principalmente em algoritmos de grafos, como Kruskal.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                         <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/08-grafos">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                                Grafos
                                            </p>
                                            <p className="mb-4">
                                                Estruturas matemáticas formadas por vértices e arestas, representando relações entre elementos e usadas em redes, caminhos mínimos e fluxos.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/09-kmp-string-hashing">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                                KMP e String Hashing
                                            </p>
                                            <p className="mb-4">
                                                Algoritmos para busca eficiente de padrões em strings; KMP usa prefixos para evitar comparações desnecessárias, enquanto hashing transforma strings em valores numéricos.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                         <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/10-teoria-dos-numeros">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                                Teoria dos números
                                            </p>
                                            <p className="mb-4">
                                                Ramo da matemática que estuda propriedades dos números inteiros, incluindo divisibilidade, primos, congruências e criptografia.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                         <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <Link to="/aprender/11-analise-combinatoria">
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <p className="block mb-4 text-2xl font-black leading-tight">
                                                Análise Combinatória
                                            </p>
                                            <p className="mb-4">
                                                Estudo de contagem e arranjo de elementos, abrangendo permutações, combinações e princípio da inclusão-exclusão.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export const Head = () => <Seo title="Aprenda sobre programação competitiva" />

export default BlogPage
