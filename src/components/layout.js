import React from "react"
import PropTypes from "prop-types"
import "semantic-ui-less/semantic.less"
import "./layout.less"
import { Container } from "semantic-ui-react"

const Layout = ({ children, showMasthead }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
