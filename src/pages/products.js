import React from "react"
import SpecSheet from "./../components/spec-sheet"
import Description from "./../components/description"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Heading, Button, Menu, Tabs, Tab, Box } from "grommet"

const ProductsPage = ({ data: { prismicModel } }) => {
  // const model = data.prismicModel.data
  const { data } = prismicModel
  console.log(data)
  return (
    <Layout>
      <SEO title="Products" />
      <Heading level={1}>{data.product_name.text}</Heading>
      <Button label="Get a Quote"></Button>
      <Menu
        label="Size"
        items={[
          { label: "Some Size", onClick: () => {} },
          { label: "Another Size", onClick: () => {} },
        ]}
      />
      <Tabs justify="start">
        <Tab title="Description">
          <Box pad="medium">
            <Description content={data.product_description.html} />
          </Box>
        </Tab>
        <Tab title="Specifications">
          <Box pad="medium">
            <SpecSheet />
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
