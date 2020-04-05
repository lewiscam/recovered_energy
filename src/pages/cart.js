import React from "react"

import Cart from "../components/cart"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"

const CartPage = () => (
  <Layout>
    <Container className="main-container">
      <h1>Cart</h1>
      <Cart />
    </Container>
  </Layout>
)

export default CartPage
