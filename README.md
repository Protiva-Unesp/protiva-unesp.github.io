# Protiva - Programação Competitiva
#### ATENÇÃO: UTILIZE A VERSÃO DO NODE 20.18.1, UMA VERSÂO MAIS RODA GERA PROBLEMAS

## Instalando 
Para instalar o projeto:

```
npm install
```

## Criando uma nova build
Após dar push, rode o seguinte comando

```
npm run deploy
```


## Criando Artigos
Para criar um artigo, crie um arquivo .md e coloque ele dentro de um diretório localizado em "./src/articles", ou crie um diretório novo

Após isso, vá para "./gatsby-config.ts" e adicione o trecho de código contendo o caminho para o arquivo .md recém criado:

```javascript
{
    resolve: "gatsby-source-filesystem",
    options: {
        name: `NOME-DO-ARQUIVO`,
        path: `${__dirname}/src/articles/caminho/para/arquivo/arquivo-md`, 
    },
},
```

Depois, vá para ".src/src/pages" e escolha o diretório onde está o novo arquivo (atualmente temos "aprender", "introducao-a-programacao" e "provas-anteriores"),
edite o "index.tsx" na raiz do diretório escolhido e adicione o novo card que representa o arquivo .md que você criou.

Acesso o diretório (ou crie um novo) onde está o novo arquivo .md

Edite a linha 22, ajeitando a rota correta dentro da tag "<Link to>"

Edite a query do GraphQL encontrada a partir da linha 43 do arquivo e coloque o regex para o diretório onde está o arquivo .md:

``` 
export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/01-introducao/" } }
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
```

Também edite a linha 61 do arquivo para ajustar a tag utilizada para SEO:

``` javascript
export const Head = () => <Seo title="Introdução à Programação Competitiva" />
```

Insira o arquivo .md na raiz do diretorio que corresponde ao diretório que possui o arquivo .md, localizado em "./src/pages/topico/diretorio":

``` javascript
import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../../components/seo'
import { blogContainer } from '../../../styles/blogPost.module.css'
import NavBar from '../../../components/navbar'
import Footer from '../../../components/footer'

const BlogPost = ({ data }) => {
    return (
        <>
            <NavBar />
            <div className={blogContainer}>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <p>{data.markdownRemark.frontmatter.description}</p>
                <p>Autor(es): {data.markdownRemark.frontmatter.author}</p>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
```
