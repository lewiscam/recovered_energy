import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Button, Menu, Tabs, Tab, Box } from "grommet"

const ProductsPage = () => (
  <Layout>
    <SEO title="Products" />
    <Heading level={1}>Product Name</Heading>
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
        <Box pad="medium">Product Description goes here</Box>
      </Tab>
      <Tab title="Specifications">
        <Box pad="medium">Spec sheet goes here</Box>
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

export default ProductsPage
