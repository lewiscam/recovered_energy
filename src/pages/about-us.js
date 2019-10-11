import React, { useState } from "react"
import { graphql } from "gatsby"

const About = ({ data: { prismicAboutUs } }) => {
  const aboutUs = prismicAboutUs.data

  return <div>hello</div>
}

export default About
export const pageQuery = graphql`
  query MyQuery{
    prismicAboutUs(uid: { eq: $uid }) {
      uid
      data {
        about_us_content {
          html
          text
        }
        page_title {
          html
          text
        }
      }
    }
  }
`
