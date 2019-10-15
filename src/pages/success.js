import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Message } from "semantic-ui-react"

const SuccessPage = () => (
  <Layout>
    <SEO title="Success" />
    <Message
      success
      header="Thank you for contacting us!"
      content="Your request has been sent. We will get back to you as soon as possible."
    />
  </Layout>
)

export default SuccessPage
