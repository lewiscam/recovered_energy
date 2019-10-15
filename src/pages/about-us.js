import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "./../components/layout"
import { Container } from "semantic-ui-react"

const About = ({ data: { allPrismicAboutUs } }) => {
  const aboutUs = allPrismicAboutUs.edges[0].node.data

  return (
    <Layout>
      <Container text className="main-container">
        <h1>{aboutUs.page_title.text}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: aboutUs.about_us_content.html }}
        ></div>
      </Container>
    </Layout>
  )
}

export default About
export const pageQuery = graphql`
  query MyQuery {
    allPrismicAboutUs {
      edges {
        node {
          data {
            about_us_content {
              html
            }
            page_title {
              text
            }
          }
        }
      }
    }
  }
`
