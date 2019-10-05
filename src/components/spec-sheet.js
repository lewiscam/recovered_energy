import React from "react"
import { Table } from "semantic-ui-react"

const SpecSheet = props => {
  function displaySpecs(size) {
    return size.items.map((specs, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>
            <strong>{specs.spec_name.text}</strong>
          </Table.Cell>
          <Table.Cell>{specs.spec_value.text}</Table.Cell>
        </Table.Row>
      )
    })
  }

  return (
    <Table>
      <Table.Body>{displaySpecs(props.size)}</Table.Body>
    </Table>
  )
}

export default SpecSheet
