import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../../components/seo'
import NavBar from '../../../components/navbar'
import Footer from '../../../components/footer'

const BlogPost = ({ data }) => {
    return (
        <>
            <NavBar />
                <div className="max-w-4xl mx-auto px-4 py-8">
                    {/* Blog Post Header */}
                    <header className="mb-8">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {data.markdownRemark.frontmatter.title}
                      </h1>
                      <p className="text-lg text-gray-700 mb-4">
                        {data.markdownRemark.frontmatter.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        Autor(es): {data.markdownRemark.frontmatter.author}
                      </p>
                    </header>

                    {/* Blog Post Content */}
                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                    />
                </div>
            <Footer />
        </>
    )
}


export const query = graphql`
    query ($id: String) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                description
                author
            }
            html
        }
    }
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default BlogPost
