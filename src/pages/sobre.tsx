import * as React from 'react'
import Seo from '../components/seo'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <>
            <NavBar />
            <p>Projeto de extensão da Unesp Bauru</p>
            <Footer />
        </>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
