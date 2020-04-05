import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import ProductForm from "../components/productForm"
import { Image, Grid, Container } from "semantic-ui-react"
import Layout from "../components/layout"

const PartTemplate = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <Layout>
      <Container className="main-container">
        <SEO title={product.title} description={product.description} />
        <Grid columns={2}>
          <Grid.Column>
            {product.images.map(image => (
              <Image
                src={image.originalSrc}
                key={image.id}
                alt={product.title}
              />
            ))}
          </Grid.Column>
          <Grid.Column>
            <h1>{product.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
          </Grid.Column>
        </Grid>
      </Container>
    </Layout>
  )
}

export const partQuery = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default PartTemplate
