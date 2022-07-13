const path = require('path')

exports.createPages = async ({graphql, actions, reporter }) => {
    const {createPage} = actions

    // Post pages
    const posts = await graphql(`
    query MyQuery {
        allContentfulEntry {
          edges {
            node {
              ... on ContentfulNews {
                id
                title
                slug
              }
              ... on ContentfulProjects {
                id
                slug
                title
              }
              ... on ContentfulFeature {
                id
                slug
                title
              }
            }
          }
        }
      }
    `)

    if (posts.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query`)
        return
    }
    const postDetailTemplate = path.resolve("./src/templates/post-detail.js")
    posts.data.allContentfulEntry.edges.forEach(({node}) => {
        if(node.title == "dummy-post") {
            return
        }
        createPage({
            path: node.slug,
            component: postDetailTemplate,
            context: {slug: node.slug, id: node.id }
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
                path: `projects/post-quarantine-urbanism/${edge.node.frontmatter.slug}`,
                component: articlePostTemplate,
                context: {
                    slug: `${edge.node.frontmatter.slug}`,
                },
            })
        })
}