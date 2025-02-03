import * as React from 'react'
import Seo from '../components/seo'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-400 flex flex-col items-center justify-center p-6">
                <div className="mt-20 max-w-6xl w-full p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">
                        Sobre a ProTiva 
                    </h2>
                    <p className="text-lg text-white text-center mb-8">
                        Projeto de extensão da Unesp Bauru que tem como objetivo
                        disponibilizar material didático produzido por alunos e
                        professores sobre Programação Competitiva, com 
                        conteúdos voltados para treinamento para competições 
                        como a Olimpíada Brasileira de Informática, a 
                        Maratona SBC de Programação, entre outras.                      
                    </p>
                    {/*
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StaticImage 
                            src="../images/icon.png" 
                            alt="ProTiva Logo" 
                            className="rounded-lg shadow-md w-full h-48 object-cover"
                        />
                        <StaticImage
                            src="../images/dco.png" 
                            alt="Imagem 2" 
                            className="rounded-lg shadow-md w-full h-48 object-cover"
                        />
                        <StaticImage 
                            src="../images/unesp.svg" 
                            alt="Imagem 3" 
                            className="rounded-lg shadow-md w-full h-48 object-cover"
                        />
                    </div>
                    */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
