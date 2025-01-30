import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../../components/seo'
import NavBar from '../../../components/navbar'
import Footer from '../../../components/footer'

const BlogPost = ({ data }) => {
    return (
        <>
            <NavBar />
            <p>{data.markdownRemark.frontmatter.description}</p>
            <p>Autor(es): {data.markdownRemark.frontmatter.author}</p>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
