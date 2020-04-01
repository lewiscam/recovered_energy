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
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      prismic {
        allModels {
          edges {
            node {
              _meta {
                id
                uid
                lang
              }
            }
          }
        }
        allSystem_categorys {
          edges {
            node {
              _meta {
                id
                uid
              }
            }
          }
        }
      }
    }
  `)
  pages.data.prismic.allModels.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node._meta.uid}`,
      component: path.resolve("src/pages/products.js"),
      context: {
        lang: edge.node._meta.lang,
        uid: edge.node._meta.uid,
      },
    })
  })
  pages.data.prismic.allSystem_categorys.edges.forEach(edge => {
    createPage({
      path: `/systems/${edge.node._meta.uid}`,
      component: path.resolve("src/pages/systems.js"),
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
  pages.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/part/${node.handle}`,
      component: path.resolve(`src/templates/part.js`),
      context: {
        handle: node.handle,
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
