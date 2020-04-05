/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "semantic-ui-less/semantic.less"
import "./layout.less"
import { Container } from "semantic-ui-react"

import Header from "./header"
import Footer from "./footer"
import Masthead from "./masthead"
import ContextProvider from "../provider/ContextProvider"

const Layout = ({ children, showMasthead }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ContextProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      {showMasthead ? <Masthead /> : null}
      <div
        style={{
          margin: `2rem auto 0`,
          maxWidth: 1024,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Container>
          <main>{children}</main>
        </Container>
      </div>
      <Footer />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
