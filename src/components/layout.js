import React from "react"
import PropTypes from "prop-types"
import "semantic-ui-less/semantic.less"
import "./layout.less"
import { Container } from "semantic-ui-react"

const Layout = ({ children, showMasthead }) => {
  let height
  const sendPostMessage = () => {
    if (height !== document.getElementById("main").offsetHeight) {
      height = document.getElementById("main").offsetHeight
      window.parent.postMessage(
        {
          frameHeight: height,
        },
        "*"
      )
      console.log(height) // check the message is being sent correctly
    }
  }

  window.onload = () => sendPostMessage()
  window.onresize = () => sendPostMessage()
  return (
    <Container id="main">
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
