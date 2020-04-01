import React, { useContext } from "react"

import StoreContext from "../context/StoreContext"
import LineItem from "./LineItem"
import { Item, Table, Header, Button } from "semantic-ui-react"

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div>
      <Item.Group divided>{line_items}</Item.Group>
      <Table basic="very" celled collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">Subtotal</Header>
            </Table.Cell>
            <Table.Cell>$ {checkout.subtotalPrice}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">Taxes</Header>
            </Table.Cell>
            <Table.Cell>$ {checkout.totalTax}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">Total</Header>
            </Table.Cell>
            <Table.Cell>
              <strong>$ {checkout.totalPrice}</strong>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button
        primary
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Check Out
      </Button>
    </div>
  )
}

export default Cart
