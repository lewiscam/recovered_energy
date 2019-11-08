import React from "react"
import { useStaticQuery, Link } from "gatsby"
import { Card, Image } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query mastheadData {
      allPrismicSystemCategory {
        nodes {
          uid
          data {
            system_category_title {
              text
            }
            system_category_image {
              url
              alt
            }
          }
        }
      }
    }
  `)

  const systemCategories = data.allPrismicSystemCategory.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <Card.Group>
        {systemCategories.map((system, key) => {
          return (
            <Card style={{ width: "200px" }}>
              <Image
                src={system.data.system_category_image.url}
                alt={system.data.system_category_image.alt}
              />
              <Card.Content>
                <Card.Header>
                  <Link to={"/systems/" + system.uid} key={key}>
                    {system.data.system_category_title.text}
                  </Link>
                </Card.Header>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    </Layout>
  )
}

export default IndexPage
