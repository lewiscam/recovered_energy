import React from "react"
import PropTypes from "prop-types"
import "semantic-ui-less/semantic.less"
import "./layout.less"
import { Container } from "semantic-ui-react"

import Header from "./header"
import Footer from "./footer"
import Masthead from "./masthead"
import ContextProvider from "../provider/ContextProvider"

const Layout = ({ children, showMasthead }) => {
  return (
    <ContextProvider>
      <Header />
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
