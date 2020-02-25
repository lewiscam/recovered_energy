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
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            images {
              originalSrc
            }
            shopifyId
            handle
            description
            availableForSale
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
      allPrismicModel {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicSystemCategory {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)
  pages.data.allPrismicModel.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node.uid}`,
      component: path.resolve("src/pages/products.js"),
      context: {
        uid: edge.node.uid,
      },
    })
  })
  pages.data.allPrismicSystemCategory.edges.forEach(edge => {
    createPage({
      path: `/systems/${edge.node.uid}`,
      component: path.resolve("src/pages/systems.js"),
      context: {
        uid: edge.node.uid,
      },
    })
  })
  pages.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/part/${node.handle}`,
      component: path.resolve(`src/templates/part.js`),
      context: {
        product: node,
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
