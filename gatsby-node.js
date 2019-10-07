/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allPrismicModel {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)
  const template = path.resolve("src/pages/products.js")
  pages.data.allPrismicModel.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "../../theme.config$": path.join(
          __dirname,
          "src/semantic/theme.config"
        ),
      },
    },
  })
}
