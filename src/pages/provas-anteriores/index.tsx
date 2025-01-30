import * as React from 'react'
import { Link } from 'gatsby'
import Seo from '../../components/seo'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

const BlogPage = () => {
    return (
        <>
            <NavBar />
            <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
                <div className="flex flex-wrap items-center justify-between mb-8">
                    <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
                        Provas Anteriores
                    </h2>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        <div className="flex flex-grow">
                            <div className="triangle"></div>
                            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                                <div>
                                    <Link to="/provas-anteriores/caderno-questoes"
                                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                        Caderno de Questões
                                    </Link>
                                    <p className="mb-4">
                                        Confira questões resolvidas de provas anteriores!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        <div className="flex flex-grow">
                            <div className="triangle"></div>
                            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                                <div>
                                    <Link to="/provas-anteriores/resolucao"
                                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                        Resolução de provas anteriores
                                    </Link>
                                    <p className="mb-4">
                                        Veja resoluções detalhadas de provas anteriores!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export const Head = () => <Seo title="Aprenda sobre programação competitiva" />

export default BlogPage
