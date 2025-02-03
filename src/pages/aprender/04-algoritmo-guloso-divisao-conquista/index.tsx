import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from '../../../components/seo'
import NavBar from '../../../components/navbar'
import Footer from '../../../components/footer'

const BlogPage = ({ data }) => {
    return (
        <>
            <NavBar />
            <div className="bg-gradient-to-br from-blue-700 to-blue-400">
                <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 pt-20">
                    <div className="flex flex-wrap items-center justify-between mb-8">
                        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl text-white">
                            Algoritmo guloso, divisão e conquista
                        </h2>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {data.allMarkdownRemark.nodes.map((node, index) => (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col">
                                <div className="flex flex-grow h-full">
                                    <div className="triangle"></div>
                                    <div className="flex flex-col justify-between p-6 bg-red-500 border border-gray-400 text-white w-full h-full min-h-[250px]">
                                        <div>
                                            <Link
                                                to={`/aprender/04-algoritmo-guloso-divisao-conquista/${node.frontmatter.slug}`}
                                                className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-300"
                                            >
                                                {node.frontmatter.title}
                                            </Link>
                                            <p className="mb-4">
                                                {node.frontmatter.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/04-algoritmo-guloso-divisao-conquista/" } }
            sort: { frontmatter: { title: ASC } }
        ) {
            nodes {
                frontmatter {
                    title
                    description
                    slug
                }
                id
            }
        }
    }
`

export const Head = () => <Seo title="Algoritmo Guloso, Divisão e Conquista" />

export default BlogPage
