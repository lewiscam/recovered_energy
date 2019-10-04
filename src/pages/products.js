import React, { useState } from "react"
import SpecSheet from "./../components/spec-sheet"
import Description from "./../components/description"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Heading, Button, Menu, Tabs, Tab, Box } from "grommet"

const ProductsPage = ({ data: { prismicModel, allPrismicSize } }) => {
  const model = prismicModel.data

  //TODO: do this filter in the query
  const sizes = allPrismicSize.edges.filter(
    element => element.node.data.parent_model.uid === prismicModel.uid
  )
  const [size, setSize] = useState(allPrismicSize.edges[0])

  const sizesList = sizes.map(size => ({
    label: size.node.data.product_size_name.text,
    onClick: () => setSize(size),
  }))
  const getSlice = (size, key) => {
    return size.node.data.body.filter(element => element.__typename === key)[0]
  }
  return (
    <Layout>
      <SEO title="Products" />
      <Heading level={1}>{model.product_name.text}</Heading>
      <Button label="Get a Quote"></Button>
      <Menu label="Size" items={sizesList} />
      <Tabs justify="start">
        <Tab title="Description">
          <Box pad="medium">
            <Description content={model.product_description.html} />
          </Box>
        </Tab>
        <Tab title="Specifications">
          <Box pad="medium">
            <SpecSheet size={getSlice(size, "PrismicSizeBodySpecSheet")} />
          </Box>
        </Tab>
        <Tab title="Documentation">
          <Box pad="medium">documentation goes here</Box>
        </Tab>
        <Tab title="Photos">
          <Box pad="medium">photos go here</Box>
        </Tab>
        <Tab title="Spare Parts">
          <Box pad="medium">Spare Parts list goes here</Box>
        </Tab>
      </Tabs>
    </Layout>
  )
}

export default ProductsPage
export const pageQuery = graphql`
  query pageQuery($uid: String) {
    prismicModel(uid: { eq: $uid }) {
      uid
      data {
        product_description {
          html
          text
        }
        product_name {
          html
          text
        }
      }
    }
    allPrismicSize {
      edges {
        node {
          data {
            product_size_name {
              text
            }
            spare_parts {
              text
            }
            parent_model {
              uid
            }
            body {
              ... on PrismicSizeBodyDocumentation {
                id
                items {
                  attachment {
                    url
                    name
                  }
                }
              }
              ... on PrismicSizeBodyPictures {
                id
                items {
                  product_size_image {
                    url
                    alt
                  }
                }
              }
              ... on PrismicSizeBodySpecSheet {
                id
                items {
                  spec_name {
                    text
                  }
                  spec_value {
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
