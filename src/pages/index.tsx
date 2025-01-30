import * as React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/seo'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const IndexPage = () => {
    return (
        <>
            <NavBar/>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
                {/* Hero Section */}
                <div className="text-center max-w-2xl">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        ProTiva - Programação Competitiva
                    </h1>
                    <p className="text-xl text-gray-700 mb-8">
                        Aprenda sobre estruturas de dados e algoritmos utilizados em competições de programação!
                    </p>
                    <div className="space-x-4">
                        {/*
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                            Aprender
                        </button>
                        <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                            Saiba mais
                        </button>
                        */}
                    </div>
                </div>
                {/* Features Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                    <Link to="/aprender">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aprenda</h2>
                            <p className="text-gray-700">
                                Se prepare para competições de programação
                            </p>
                        </div>
                    </Link>
                    <Link to="provas-anteriores">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Provas Anteriores</h2>
                            <p className="text-gray-700">
                                Se prepare com questões respondidas de provas anteriores
                            </p>
                        </div>
                    </Link>
                    <Link to="introducao-a-programacao">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introdução à Programação</h2>
                            <p className="text-gray-700">
                                Dê o passo inicial para aprender programação
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
