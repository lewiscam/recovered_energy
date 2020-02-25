import React from "react"

import Layout from "../components/layout"

const PartTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <Layout>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      <img src={product.images[0].originalSrc}></img>
    </Layout>
  )
}

export default PartTemplate
