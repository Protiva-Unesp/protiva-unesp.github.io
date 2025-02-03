import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from '../../../components/seo'
import NavBar from '../../../components/navbar'
import Footer from '../../../components/footer'

const BlogPage = ({ data }) => {
    return (
        <>
            <NavBar />
            <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
                <div className="flex flex-wrap items-center justify-between mb-8">
                    <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
                        08 - Grafos 
                    </h2>
                </div>
                <div className="flex flex-wrap -mx-4">
                {
                    data.allMarkdownRemark.nodes.map(node => (
                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-red-500 border border-gray-400 text-white">
                                    <div>
                                        <Link to={`/aprender/08-grafos/${node.frontmatter.slug}`}
                                            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-300">
                                            {node.frontmatter.title}
                                        </Link>
                                        <p className="mb-4">
                                            {node.frontmatter.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
            <Footer />
        </>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/08-grafos/" } }
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

export const Head = () => <Seo title="Grafos" />

export default BlogPage
