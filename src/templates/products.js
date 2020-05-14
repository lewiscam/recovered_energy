import React, { useState } from "react"
import SpecSheet from "../components/spec-sheet"
import Description from "../components/description"
import Photos from "../components/photos"
import Documentation from "../components/documentation"
import Spares from "../components/spares"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import {
  Dropdown,
  Tab,
  Button,
  Header,
  Container,
  Item,
} from "semantic-ui-react"
import { sendPostMessage } from "./../utils/sendPostMessage"

const ProductsTemplate = ({ data: { prismic } }) => {
  const model = prismic.model

  //TODO: do this filter in the query
  const allSizes = prismic.allSizes.edges.filter(
    element => element.node.parent_model._meta.uid === prismic.model._meta.uid
  )
  const [selectedSize, setSelectedSize] = useState(allSizes[0])
  const options = allSizes.map((size, key) => ({
    key,
    text: size.node.product_size_name[0].text,
    value: size.node.product_size_name[0].text,
  }))

  const getSlice = (size, key) => {
    return size.node.body.filter(element => element.__typename === key)[0]
  }

  const onSizeChange = (e, data) => {
    setSelectedSize(
      allSizes.filter(
        size => data.value === size.node.product_size_name[0].text
      )[0]
    )
    sendPostMessage()
  }

  const onTabChange = () => {
    sendPostMessage()
  }

  const panes = [
    {
      menuItem: "Description",
      render: () => (
        <Tab.Pane attached={false}>
          <Description content={model.product_description[0].text} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Specifications",
      render: () => (
        <Tab.Pane attached={false}>
          <SpecSheet
            specs={getSlice(selectedSize, "PRISMIC_SizeBodySpec_sheet")}
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
              "PRISMIC_SizeBodyDocumentation"
            )}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Photos",
      render: () => (
        <Tab.Pane attached={false}>
          <Photos photos={getSlice(selectedSize, "PRISMIC_SizeBodyPictures")} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Spare Parts",
      render: () => (
        <Tab.Pane attached={false}>
          <Spares spareParts={selectedSize.node} />
        </Tab.Pane>
      ),
    },
  ]

  return (
    <Layout>
      <Container className="main-container">
        <SEO title="Products" />
        {!!selectedSize ? (
          <>
            <Item.Group>
              <Item>
                <Item.Image
                  size="small"
                  src={
                    getSlice(selectedSize, "PRISMIC_SizeBodyPictures").fields[0]
                      .product_size_image.url
                  }
                />

                <Item.Content>
                  <Item.Header as="h1">
                    {model.product_name[0].text}
                  </Item.Header>
                  <Item.Description>
                    <Header as="h2">
                      Size: {selectedSize.node.product_size_name[0].text}
                    </Header>
                    {/* <Button content="Get a Quote" primary /> */}
                    <Dropdown
                      text="Sizes"
                      options={options}
                      onChange={onSizeChange}
                      button
                    />
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
            <Tab
              style={{ marginTop: "2rem" }}
              menu={{
                secondary: true,
                pointing: true,
                fluid: true,
              }}
              panes={panes}
              onTabChange={onTabChange}
            />
          </>
        ) : null}
      </Container>
    </Layout>
  )
}

export const productsQuery = graphql`
  query($lang: String!, $uid: String!) {
    prismic {
      model(lang: $lang, uid: $uid) {
        _meta {
          uid
        }
        product_description
        product_name
      }
      allSizes {
        edges {
          node {
            product_size_name
            spare_parts
            parent_model {
              ... on PRISMIC_Model {
                _meta {
                  uid
                }
              }
            }
            body {
              ... on PRISMIC_SizeBodyDocumentation {
                fields {
                  attachment {
                    ... on PRISMIC__FileLink {
                      url
                      name
                    }
                  }
                }
              }
              ... on PRISMIC_SizeBodyPictures {
                fields {
                  product_size_image
                }
              }
              ... on PRISMIC_SizeBodySpec_sheet {
                fields {
                  spec_name
                  spec_value
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProductsTemplate
