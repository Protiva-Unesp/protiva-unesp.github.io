import * as React from 'react'
import Seo from '../components/seo'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <>
            <NavBar />
            <p>Material produzido por alunos e professores da Unesp sobre 
            Programação Competitiva, com conteúdos voltados para treinamento 
            para competições como a Olimpíada Brasileira de Informática, a 
            Maratona SBC de Programação, entre outras.</p>
            <Footer />
        </>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
