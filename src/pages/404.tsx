import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>Page not found</h1>
                <p style={paragraphStyles}>
                    Desculpe, não achamos o que você procurava
                    <br />
                    <Link to="/">Voltar para a página inicial</Link>.
                </p>
        </main>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
