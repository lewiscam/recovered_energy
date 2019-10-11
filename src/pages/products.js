import React, { useState } from "react"
import SpecSheet from "./../components/spec-sheet"
import Description from "./../components/description"
import Photos from "./../components/photos"
import Documentation from "./../components/documentation"
import Spares from "./../components/spares"
import MainImage from "./../components/main-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Menu, Dropdown, Tab, Button, Header, Image } from "semantic-ui-react"


const ProductsPage = ({ data: { prismicModel, allPrismicSize } }) => {
  const model = prismicModel.data

  //TODO: do this filter in the query
  const allSizes = allPrismicSize.edges.filter(
    element => element.node.data.parent_model.uid === prismicModel.uid
  )
  const [selectedSize, setSelectedSize] = useState(allPrismicSize.edges[0])
  const options = allSizes.map((size, key) => ({
    key,
    text: size.node.data.product_size_name.text,
    value: size.node.data.product_size_name.text,
  }))

  const getSlice = (size, key) => {
    return size.node.data.body.filter(element => element.__typename === key)[0]
  }

  const onSizeChange = (e, data) => {
    setSelectedSize(
      allSizes.filter(
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
          <SpecSheet
            specs={getSlice(selectedSize, "PrismicSizeBodySpecSheet")}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Documentation",
      render: () => (
        <Tab.Pane attached={false}>
          <Documentation
            documentation={getSlice(
              selectedSize,
              "PrismicSizeBodyDocumentation"
            )}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Photos",
      render: () => (
        <Tab.Pane attached={false}>
          <Photos photos={getSlice(selectedSize, "PrismicSizeBodyPictures")} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Spare Parts",
      render: () => (
        <Tab.Pane attached={false}>
          <Spares spareParts={selectedSize.node.data} />
        </Tab.Pane>
      ),
    },
  ]

  return (
    <Layout>
      <SEO title="Products" />
      <Header as="h1">{model.product_name.text}</Header>
      <Header as="h2">
        Size: {selectedSize.node.data.product_size_name.text}
      </Header>
      <MainImage image={getSlice(selectedSize, "PrismicSizeBodyPictures")} />
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
      <Tab
        style={{ marginTop: "2rem" }}
        menu={{ secondary: true, pointing: true, fluid: true, vertical: false }}
        panes={panes}
      />
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
