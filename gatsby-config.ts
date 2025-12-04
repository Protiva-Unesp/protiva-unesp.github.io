import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        title: `ProTiva - Programação Competitiva`,
        siteUrl: `https://protiva-unesp.github.io/`,
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
                plugins: [
                    `gatsby-remark-images`,
                    `gatsby-remark-static-images`,
                    `gatsby-remark-autolink-headers`,
                    `gatsby-remark-responsive-iframe`,
                    {
	                resolve: 'gatsby-remark-video',
	                options: {
	                	    width: 800,
	                	    height: 'auto',
	                	    preload: 'auto',
	                	    muted: true,
	                	    autoplay: true,
	                	    playsinline: true,
	                	    controls: true,
	                	    loop: true
	                    }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: { sh: "bash", cpp: "cpp" },
                            showLineNumbers: true,
                            noInlineHighlight: true,
                        },
                    },          
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/icon.png`,
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
                name: `02-stl`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/02-stl`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `03-forca-bruta-recursao-backtracking`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/03-forca-bruta-recursao-backtracking`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `04-algoritmo-guloso-divisao-conquista`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/04-algoritmo-guloso-divisao-conquista`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `05-programacao-dinamica`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/05-programacao-dinamica`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `06-arvores`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/06-arvores`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `07-disjoint-set-union-find`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/07-disjoint-set-union-find`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `08-grafos`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/08-grafos`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `09-kmp-string-hashing`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/09-kmp-string-hashing`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `10-teoria-dos-numeros`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/10-teoria-dos-numeros`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `11-analise-combinatoria`,
                path: `${__dirname}/src/articles/programacaoCompetitiva/11-analise-combinatoria`, 
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
                name: `variaveis`,
                path: `${__dirname}/src/articles/introducao-a-programacao/variaveis`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `componentes-computador`,
                path: `${__dirname}/src/articles/introducao-a-programacao/componentes-computador`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `condicionais`,
                path: `${__dirname}/src/articles/introducao-a-programacao/estruturas-condicionais`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `repeticao`,
                path: `${__dirname}/src/articles/introducao-a-programacao/estruturas-repeticao`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `leitura-impressao`,
                path: `${__dirname}/src/articles/introducao-a-programacao/leitura-impressao`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `operadores-logicos`,
                path: `${__dirname}/src/articles/introducao-a-programacao/operadores-logicos`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `scratch-cofre`,
                path: `${__dirname}/src/articles/introducao-a-programacao/scratch-cofre`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2016-1a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2016/1afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2017-1a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2017/1afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2017-2a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2017/2afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2011-1a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2011/1afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2012-1a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2012/1afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2018-1a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2018/1afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2018-2a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2018/2afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2020-1a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2020/1afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2020-2a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2020/2afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2021-1a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2021/1afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2021-nivel1`,
                path: `${__dirname}/src/articles/provas-anteriores/2021/nivel1`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2020-nivel1`,
                path: `${__dirname}/src/articles/provas-anteriores/2020/nivel1`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `resolucao-2023-2a-fase`,
                path: `${__dirname}/src/articles/provas-anteriores/2023/2afase`, 
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `introducao-es`,
                path: `${__dirname}/src/articles/estruturas-dados`, 
            },
        },
    ],
}

export default config
