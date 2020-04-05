import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "./../components/layout"
import { Container } from "semantic-ui-react"

const About = ({ data: { prismic } }) => {
  const aboutUs = prismic.allAbout_uss.edges[0].node

  return (
    <Layout>
      <Container text className="main-container">
        <h1>{aboutUs.page_title[0].text}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: aboutUs.about_us_content[0].text }}
        ></div>
      </Container>
    </Layout>
  )
}

export default About
export const pageQuery = graphql`
  query MyQuery {
    prismic {
      allAbout_uss {
        edges {
          node {
            about_us_content
            page_title
          }
        }
      }
    }
  }
`
