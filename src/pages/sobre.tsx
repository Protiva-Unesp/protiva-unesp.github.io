import * as React from 'react'
import Seo from '../components/seo'
import NavBar from '../components/navbar'
import { aboutContainer } from '../styles/about.module.css'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <>
            <NavBar />
                <div className={aboutContainer}>
                    <h1>Sobre nós</h1>
                    <h2 className="mt-8 mb-4 text-2xl font-bold">Coordenadores</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Profa. Roberta Spolon</h3>
                            <h4 className="text-sm text-gray-500">Coordenadora</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Profa. Andrea Carla Goncalves Vianna</h3>
                            <h4 className="text-sm text-gray-500">Coordenadora</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Prof. Higor Amario de Souza</h3>
                            <h4 className="text-sm text-gray-500">Coordenador</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Prof. Pedro Henrique Paiola</h3>
                            <h4 className="text-sm text-gray-500">Coordenador e desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Profa. Renata Spolon Lobato</h3>
                            <h4 className="text-sm text-gray-500">Coordenadora</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Prof. Rene Pegoraro</h3>
                            <h4 className="text-sm text-gray-500">Coordenador e desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Prof. Wilson Massashiro Yonezawa</h3>
                            <h4 className="text-sm text-gray-500">Coordenador e desenv. de material didático</h4>
                        </div>
                    </div>
                    <h2 className="mt-8 mb-4 text-2xl font-bold">Colaboradores</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Alexandre Selani</h3>
                            <h4 className="text-sm text-gray-500">Desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Arissa Yoshida</h3>
                            <h4 className="text-sm text-gray-500">Desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Dayna Caroline Domiciano Do Prado</h3>
                            <h4 className="text-sm text-gray-500">Desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Eduardo Rodrigues Teixeira</h3>
                            <h4 className="text-sm text-gray-500">Desenv. do site e organização do material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Gabriel Rasi Ferre</h3>
                            <h4 className="text-sm text-gray-500">Desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Jairo Kapta Berniger Litman</h3>
                            <h4 className="text-sm text-gray-500">Desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>João Victor Fernandes Souza</h3>
                            <h4 className="text-sm text-gray-500">Desenvolvimento do site</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Luis Henrique Morelli</h3>
                            <h4 className="text-sm text-gray-500">Desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Nicolas Barbosa Gomes</h3>
                            <h4 className="text-sm text-gray-500">Desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Uriel Freitas de Campos</h3>
                            <h4 className="text-sm text-gray-500">Desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Vinicius Bolandini Lima</h3>
                            <h4 className="text-sm text-gray-500">Desenv. de material didático</h4>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <h3>Yasmin Rodrigues Sobrinho</h3>
                            <h4 className="text-sm text-gray-500">Desenv. de material didático</h4>
                        </div>
                    </div>
                    <h2 className="mt-8 mb-4 text-2xl font-bold">Programação Competitiva da Unesp na mídia</h2>
                    <a href="https://www.fc.unesp.br/#!/noticia/1241/maratona-de-programacao-garantiu-o-segundo-lugar-ao-bcc-da-fc">- Maratona de Programação garantiu o segundo lugar ao BCC da FC (05/09/2024)</a>
                    <a href="https://www.fc.unesp.br/#!/noticia/630/alunos-da-fc-participam-da-xxiv-maratona-sbc-de-programacao/">- Alunos da FC participam da XXIV Maratona SBC de Programação (05/12/2019)</a>
                    <a href="https://www.fc.unesp.br/?ar=a%5D6%5D%23w..#!/noticia/262/bauru-vence-maratona-de-programacao-2016/">- Bauru vence maratona de programação 2016 (12/09/2016)</a>
                </div>
            <Footer />
        </>
    )
}

export const Head = () => <Seo title="Sobre nós" />

export default AboutPage
