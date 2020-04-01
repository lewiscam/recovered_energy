import React, { useContext } from "react"

import StoreContext from "../context/StoreContext"
import { Item, Button } from "semantic-ui-react"

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <Item.Image
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <Item>
      {variantImage}

      <Item.Content>
        <Item.Header>{line_item.title}</Item.Header>
        <Item.Meta>
          <span className="cinema">IFC</span>
        </Item.Meta>
        <Item.Description>
          {line_item.variant.title === !"Default Title"
            ? line_item.variant.title
            : ""}
          {selectedOptions}
          {line_item.quantity}
        </Item.Description>
        <Item.Extra>
          <Button basic negative floated="right" onClick={handleRemove}>
            Remove from Cart
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default LineItem
