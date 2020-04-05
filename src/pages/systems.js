import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Image, Grid, Card } from "semantic-ui-react"
const Systems = ({ pageContext, data: { prismic } }) => {
  const allProducts = prismic.allModels.edges.filter(
    edge => edge.node.system_category._meta.uid === pageContext.uid
  )

  const displayProduct = allProducts.map(product => {
    return (
      <Card>
        {product.node.model_feature_image ? (
          <Image
            src={product.node.model_feature_image.url}
            wrapped
            ui={false}
          />
        ) : null}
        <Card.Content>
          <Card.Header>
            <Link
              to={"/products/" + product.node._meta.uid}
              key={product.node._meta.uid}
            >
              <h2>{product.node.product_name.text}</h2>
            </Link>
          </Card.Header>
        </Card.Content>
      </Card>
    )
  })

  ////// not using yet. still working on getting this to work ///////
  // const currentSystemCategory =
  // allProducts.filter(currentCategory =>
  //     currentCategory.node.system_category.document[0].uid === window.history.state.item.uid
  //     )

  return (
    <Layout>
      <Grid>
        <Grid.Row columns={4}>
          <Card.Group>{displayProduct}</Card.Group>
        </Grid.Row>
      </Grid>
    </Layout>
  )
}

export default Systems

export const systemsQuery = graphql`
  query getProducts {
    prismic {
      allModels {
        edges {
          node {
            _meta {
              uid
            }
            model_feature_image
            product_description
            product_name
            system_category {
              ... on PRISMIC_System_category {
                _meta {
                  uid
                }
                system_category_title
              }
            }
          }
        }
      }
    }
  }
`
