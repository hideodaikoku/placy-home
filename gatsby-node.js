const path = require('path')

exports.createPages = async ({graphql, actions, reporter }) => {
    const {createPage} = actions

    // Project Pages
    const result = await graphql(`
        query {
            allContentfulProjects(filter: {type: {eq: true}}) {
                edges {
                node {
                    id
                    slug
                    type
                    title
                }
                }
            }
        }
    `)
        
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query`)
        return
    }

    const projectDetailTemplate = path.resolve(`./src/templates/project-detail.js`)
    result.data.allContentfulProjects.edges.forEach(({node}) => {
        node.slug !== "post-quarantine-urbanism" && 
        createPage({
            path: node.slug,
            component: projectDetailTemplate,
            context: {slug: node.slug}
        })
    })

    // Article pages
    const articles = await graphql(`
        query MyArticlesQuery {
            allMarkdownRemark(filter: {frontmatter: {author: {ne: null}}}, limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
        `
        )

    if (articles.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query`)
        return
    }

    // Create article pages
    const articlePostTemplate = path.resolve(`./src/templates/article-detail.js`)
        articles.data.allMarkdownRemark.edges.forEach((edge) => {
            createPage({
                path: `post-quarantine-urbanism/${edge.node.frontmatter.slug}`,
                component: articlePostTemplate,
                context: {
                    slug: `${edge.node.frontmatter.slug}`,
                },
            })
        })
}