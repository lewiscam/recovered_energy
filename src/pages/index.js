import React from "react"
import { useStaticQuery, Link, graphql, StaticQuery } from "gatsby"
import { Card, Image } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query mastheadData {
        prismic {
          allSystem_categorys {
            edges {
              node {
                _meta {
                  uid
                }
                system_category_title
                system_category_image
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout showMasthead={true}>
        <SEO title="Home" />
        <Card.Group>
          {data.prismic.allSystem_categorys.edges.map((system, key) => {
            return (
              <Card style={{ width: "200px" }} key={key}>
                {system.node.system_category_image ? (
                  <Image
                    src={system.node.system_category_image.url}
                    alt={system.node.system_category_image.alt}
                  />
                ) : null}
                <Card.Content>
                  <Card.Header>
                    {console.log(system)}
                    <Link to={"/systems/" + system.node._meta.uid} key={key}>
                      {system.node.system_category_title.text}
                    </Link>
                  </Card.Header>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </Layout>
    )}
  />
)

export default IndexPage
