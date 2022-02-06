const path = require('path')

exports.createPages = async ({graphql, actions, reporter }) => {
    const {createPage} = actions

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
            createPage({
                path: node.slug,
                component: projectDetailTemplate,
                context: {slug: node.slug}
            })
        })
}