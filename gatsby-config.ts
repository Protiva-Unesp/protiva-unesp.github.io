import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Protiva`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-postcss",
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-images`,
                          `gatsby-remark-static-images`,
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `01-introducao`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/01-introducao`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `02-stl-1`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/02-stl-1`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `03-stl-2`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/03-stl-2`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `04-forcabruta-recursao-backtracking`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/04-forcabruta-recursao-backtracking`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `05-algoritmoguloso-divisao-conquista`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/05-algoritmoguloso-divisao-conquista`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `06-programacao-dinamica`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/06-programacao-dinamica`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `07-programacao-dinamica-2`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/07-programacao-dinamica-2`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `08-arvores`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/08-arvores`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `09-disjoint-set-union`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/09-disjoint-set-union`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `10-grafos`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/10-grafos`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `11-grafos-2`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/11-grafos-2`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `12-grafos-3`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/12-grafos-3`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `13-kmp-string-hashing`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/13-kmp-string-hashing`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `14-teoria-dos-numeros`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/14-teoria-dos-numeros`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `15-analise-combinatoria`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/15-analise-combinatoria`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `deducao`,
                path: `${__dirname}/src/articles/introducao-a-programacao/deducao`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `ordenacao`,
                path: `${__dirname}/src/articles/introducao-a-programacao/ordenacao`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `caderno-questoes`,
                path: `${__dirname}/src/articles/provas-anteriores/caderno-questoes`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2018-1a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/resolucao/2018/1afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2018-2a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/resolucao/2018/2afase`, 
            },
        },
    ],
}

export default config
