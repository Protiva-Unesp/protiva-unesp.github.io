import * as React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/seo'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <>
            <NavBar/>
            <div className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-400 flex flex-col items-center justify-center p-6">
                    <div className="text-center max-w-2xl mt-12 pt-12">
                        <h1 className="text-5xl font-bold text-white mb-6">
                            ProTiva - Programação Competitiva
                        </h1>
                        <p className="text-xl text-white mb-8">
                            Aprenda sobre estruturas de dados e algoritmos utilizados em competições de programação!
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                        <Link to="/aprender">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <p className="block mb-4 text-2xl font-black leading-tight">
                                    Aprenda
                                    </p>
                                <p className="text-gray-700">
                                    Se prepare para competições de programação
                                </p>
                            </div>
                        </Link>
                        <Link to="/provas-anteriores">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <p className="block mb-4 text-2xl font-black leading-tight">
                                    Provas Anteriores
                                    </p>
                                <p className="text-gray-700">
                                    Se prepare com questões respondidas de provas anteriores
                                </p>
                            </div>
                        </Link>
                        <Link to="/introducao-a-programacao">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <p className="block mb-4 text-2xl font-black leading-tight">
                                    Introdução à Programação
                                    </p>
                                <p className="text-gray-700">
                                    Dê o passo inicial para aprender programação
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-20 max-w-6xl w-full p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-center text-white mb-6">
                            Sobre a ProTiva
                        </h2>
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="flex-shrink-0 md:mr-8 mx-auto md:mx-0 mb-6 md:mb-0" style={{ width: '200px', maxWidth: '100%' }}>
                                <StaticImage
                                    src="../images/protiva3.png"
                                    alt="ProTiva Logo"
                                    className="w-full h-auto"
                                />
                            </div>
                            <p className="text-lg text-white text-justify">
                                Projeto de extensão da Unesp Bauru que tem como
                                objetivo disponibilizar material didático produzido
                                por alunos dos cursos de Ciência da Computação e
                                Sistemas de Informação, em conjunto com professores
                                do Departamento de Computação da Faculdade de
                                Ciências, sobre Programação Competitiva.
                                O conteúdo é voltado para o treinamento
                                em competições como a Olimpíada Brasileira de
                                Informática, a Maratona SBC de Programação, entre outras.
                            </p>
                        </div>
                        <div className="items-center justify-center mt-16">
                            <p className="text-center text-white mb-6 text-2xl">
                                Acesso nosso canal no Youtube para ter acesso às video-aulas.
                                Aproveite e nos siga nas redes sociais
                            </p>
                            <div className="flex space-x-12 items-center justify-center ">
                                <a href="https://www.youtube.com/@protiva_unesp" target="_blank">
                                    <div className="w-16 h-16">
                                        <StaticImage
                                            src="../images/youtube.png"
                                            alt="youtube logo"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/protiva_unesp/" target="_blank">
                                    <div className="w-16 h-16">
                                        <StaticImage
                                            src="../images/instagram.svg"
                                            alt="instagram logo"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </a>
                                <a href="hhttps://www.facebook.com/protivaunesp" target="_blank">
                                    <div className="w-16 h-16">
                                        <StaticImage
                                            src="../images/facebook.svg"
                                            alt="facebook logo"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export const Head = () => <Seo title="Início" />

export default IndexPage
