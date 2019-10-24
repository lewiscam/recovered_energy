import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "semantic-ui-react"
const Systems = ({ data: { allPrismicSystemCategory } }) => {
  const systemsData = allPrismicSystemCategory.edges[0].node.data

  return (
    <Layout>
      <Container text className="main-container">
        <h1>{systemsData.system_category_title.text}</h1>
      </Container>
    </Layout>
  )
}

export default Systems

export const systemsQuery = graphql`
         query SystemsQuery {
           allPrismicSystemCategory {
             edges {
               node {
                 data {
                   system_category_image {
                     url
                   }
                   system_category_title {
                     text
                   }
                 }
               }
             }
           }
         }
       `