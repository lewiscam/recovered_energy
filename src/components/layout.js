import React from "react"
import PropTypes from "prop-types"
import "semantic-ui-less/semantic.less"
import "./layout.less"
import { Container } from "semantic-ui-react"
import { sendPostMessage } from "./../utils/sendPostMessage"

const Layout = ({ children, showMasthead }) => {
  if (typeof window !== "undefined") {
    window.onload = () => sendPostMessage()
    window.onresize = () => sendPostMessage()
  }
  return (
    <Container id="main" className="main-container">
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
