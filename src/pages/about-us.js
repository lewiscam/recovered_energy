import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from './../components/layout'

const About = ({ data: { allPrismicAboutUs } }) => {
  const aboutUs = allPrismicAboutUs.edges[0].node.data

  return (
    <Layout>
      <h1>{aboutUs.page_title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: aboutUs.about_us_content.html }}></div>
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
