import React, { useState } from "react"
import SpecSheet from "./../components/spec-sheet"
import Description from "./../components/description"
import Photos from "./../components/photos"
import Documentation from "./../components/documentation"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Menu, Dropdown, Tab, Button, Header } from "semantic-ui-react"

const ProductsPage = ({ data: { prismicModel, allPrismicSize } }) => {
  const model = prismicModel.data

  //TODO: do this filter in the query
  const sizes = allPrismicSize.edges.filter(
    element => element.node.data.parent_model.uid === prismicModel.uid
  )
  const [size, setSize] = useState(allPrismicSize.edges[0])

  const options = sizes.map((size, key) => ({
    key,
    text: size.node.data.product_size_name.text,
    value: size.node.data.product_size_name.text,
  }))

  const getSlice = (size, key) => {
    return size.node.data.body.filter(element => element.__typename === key)[0]
  }

  const onSizeChange = (e, data) => {
    setSize(
      sizes.filter(
        size => data.value === size.node.data.product_size_name.text
      )[0]
    )
  }

  const panes = [
    {
      menuItem: "Description",
      render: () => (
        <Tab.Pane attached={false}>
          <Description content={model.product_description.html} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Specifications",
      render: () => (
        <Tab.Pane attached={false}>
          <SpecSheet size={getSlice(size, "PrismicSizeBodySpecSheet")} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Documentation",
      render: () => (
        <Tab.Pane attached={false}>
          <Documentation
            size={getSlice(size, "PrismicSizeBodyDocumentation")}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Photos",
      render: () => (
        <Tab.Pane attached={false}>
          <Photos size={getSlice(size, "PrismicSizeBodyPictures")} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Spare Parts",
      render: () => (
        <Tab.Pane attached={false}>Spare Parts list goes here</Tab.Pane>
      ),
    },
  ]

  return (
    <Layout>
      <SEO title="Products" />
      <Header as="h1">{model.product_name.text}</Header>
      <Button content="Get a Quote" primary />
      <Menu compact>
        <Dropdown
          text="Sizes"
          options={options}
          simple
          item
          onChange={onSizeChange}
        />
      </Menu>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
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
