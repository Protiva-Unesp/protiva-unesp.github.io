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
                    <h2 className="mt-8 mb-4 text-2xl font-bold text-center">Coordenadores</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Profa. Roberta Spolon</div>
                            <div className="text-sm text-gray-500">Coordenadora</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Profa. Andrea Carla Goncalves Vianna</div>
                            <div className="text-sm text-gray-500">Coordenadora</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Prof. Higor Amario de Souza</div>
                            <div className="text-sm text-gray-500">Coordenador</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Prof. Pedro Henrique Paiola</div>
                            <div className="text-sm text-gray-500">Coordenador e desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Profa. Renata Spolon Lobato</div>
                            <div className="text-sm text-gray-500">Coordenadora</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Prof. Rene Pegoraro</div>
                            <div className="text-sm text-gray-500">Coordenador e desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Prof. Wilson Massashiro Yonezawa</div>
                            <div className="text-sm text-gray-500">Coordenador e desenv. de material didático</div>
                        </div>
                    </div>
                    <h2 className="mt-8 mb-4 text-2xl font-bold text-center">Colaboradores</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Alexandre Selani</div>
                            <div className="text-sm text-gray-500">Desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Arissa Yoshida</div>
                            <div className="text-sm text-gray-500">Desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Dayna Caroline Domiciano Do Prado</div>
                            <div className="text-sm text-gray-500">Desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Eduardo Rodrigues Teixeira</div>
                            <div className="text-sm text-gray-500">Desenv. do site e organização do material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Gabriel Rasi Ferre</div>
                            <div className="text-sm text-gray-500">Desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Jairo Kapta Berniger Litman</div>
                            <div className="text-sm text-gray-500">Desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>João Victor Fernandes Souza</div>
                            <div className="text-sm text-gray-500">Desenvolvimento do site</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Luis Henrique Morelli</div>
                            <div className="text-sm text-gray-500">Desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Nicolas Barbosa Gomes</div>
                            <div className="text-sm text-gray-500">Desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Uriel Freitas de Campos</div>
                            <div className="text-sm text-gray-500">Desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Vinicius Bolandini Lima</div>
                            <div className="text-sm text-gray-500">Desenv. de material didático</div>
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] text-center p-4">
                            <div>Yasmin Rodrigues Sobrinho</div>
                            <div className="text-sm text-gray-500">Desenv. de material didático</div>
                        </div>
                    </div>
                    <h2>Programação Competitiva da Unesp na mídia</h2>
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
