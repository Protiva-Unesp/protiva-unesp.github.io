import * as React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/seo'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const IndexPage = () => {
    return (
        <>
            <NavBar/>
            <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-200 flex flex-col items-center justify-center p-6">
                <div className="text-center max-w-2xl">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        ProTiva - Programação Competitiva
                    </h1>
                    <p className="text-xl text-white mb-8">
                        Aprenda sobre estruturas de dados e algoritmos utilizados em competições de programação!
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <Link to="/aprender"
                            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-300">
                            Aprenda
                        </Link>
                        <p className="text-gray-700">
                            Se prepare para competições de programação
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <Link to="/provas-anteriores"
                            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-300">
                            Provas Anteriores
                        </Link>
                        <p className="text-gray-700">
                            Se prepare com questões respondidas de provas anteriores
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <Link to="/introducao-a-programacao"
                            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-300">
                            Introdução à Programação
                        </Link>
                        <p className="text-gray-700">
                            Dê o passo inicial para aprender programação
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export const Head = () => <Seo title="Início" />

export default IndexPage
