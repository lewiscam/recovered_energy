import React, { useContext } from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import StoreContext from "../context/StoreContext"
import { Card, Image } from "semantic-ui-react"

const ProductGrid = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : "USD",
      minimumFractionDigits: 2,
      style: "currency",
    }).format(parseFloat(price ? price : 0))

  return (
    <StaticQuery
      query={graphql`
        query productGrid {
          allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
            edges {
              node {
                id
                title
                handle
                createdAt
                images {
                  id
                  originalSrc
                }
                variants {
                  price
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Card.Group stackable={true} itemsPerRow={3} centered={true}>
          {data.allShopifyProduct && data.allShopifyProduct.edges ? (
            data.allShopifyProduct.edges.map(
              ({
                node: {
                  id,
                  handle,
                  title,
                  images: [firstImage],
                  variants: [firstVariant],
                },
              }) => (
                <Card key={id}>
                  {firstImage && firstImage.localFile && (
                    <Image
                      src={firstImage.originalSrc}
                      alt={handle}
                      wrapped
                      ui={false}
                    />
                  )}
                  <Card.Content>
                    <Link to={`/part/${handle}/`}>
                      <Card.Header>{title}</Card.Header>
                      <Card.Meta>{getPrice(firstVariant.price)}</Card.Meta>
                    </Link>
                  </Card.Content>
                  <Card.Content extra>Add to Cart</Card.Content>
                </Card>
              )
            )
          ) : (
            <p>No Products found!</p>
          )}
        </Card.Group>
      )}
    />
  )
}

export default ProductGrid
