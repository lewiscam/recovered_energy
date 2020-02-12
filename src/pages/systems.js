import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Image, Grid, Card } from "semantic-ui-react"
const Systems = ({ pageContext, data: { allPrismicModel } }) => {
  const allProducts = allPrismicModel.edges.filter(
    edge => edge.node.data.system_category.uid === pageContext.uid
  )

  const displayProduct = allProducts.map(product => {
    return (
      <Card>
        <Image
          src={product.node.data.model_feature_image.url}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>
            <Link to={"/products/" + product.node.uid} key={product.node.uid}>
              <h2>{product.node.data.product_name.text}</h2>
            </Link>
          </Card.Header>
        </Card.Content>
      </Card>
    )
  })

  ////// not using yet. still working on getting this to work ///////
  // const currentSystemCategory =
  // allProducts.filter(currentCategory =>
  //     currentCategory.node.data.system_category.document[0].uid === window.history.state.item.uid
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
    allPrismicModel {
      edges {
        node {
          uid
          data {
            model_feature_image {
              url
            }
            product_name {
              text
            }
            system_category {
              uid
              document {
                data {
                  system_category_title {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
