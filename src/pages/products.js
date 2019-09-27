import React, { useState } from "react"
import SpecSheet from "./../components/spec-sheet"
import Description from "./../components/description"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Heading, Button, Menu, Tabs, Tab, Box } from "grommet"

const ProductsPage = ({ data: { prismicModel, prismicSize } }) => {
  // const model = data.prismicModel.data
  const model = prismicModel.data
  const sizes = prismicSize.data
  const [size, setSize] = useState(prismicSize.uid)
  console.log(sizes)

  console.log(sizes)
  return (
    <Layout>
      <SEO title="Products" />
      <Heading level={1}>{model.product_name.text}</Heading>
      <Button label="Get a Quote"></Button>
      <Menu
        label="Size"
        items={[
          {
            label: sizes.product_size_name.text,
            onClick: () => {},
          },
        ]}
      />
      <Tabs justify="start">
        <Tab title="Description">
          <Box pad="medium">
            <Description content={model.product_description.html} />
          </Box>
        </Tab>
        <Tab title="Specifications">
          <Box pad="medium">
            <SpecSheet size={size} />
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
  query modelQuery($uid: String) {
    prismicSize(data: { parent_model: { uid: { eq: $uid } } }) {
      uid
      id
      data {
        product_size_name {
          html
          text
        }
        body {
          ... on PrismicSizeBodyDocumentation {
            id
            items {
              attachment {
                url
                target
                size
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
  }
`
