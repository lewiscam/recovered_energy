import React from "react"
import { Table } from "semantic-ui-react"

const SpecSheet = props => {
  function displaySpecs(specs) {
    return specs.items.map((spec, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>
            <strong>{spec.spec_name.text}</strong>
          </Table.Cell>
          <Table.Cell>{spec.spec_value.text}</Table.Cell>
        </Table.Row>
      )
    })
  }

  return (
    <Table>
      <Table.Body>{displaySpecs(props.specs)}</Table.Body>
    </Table>
  )
}

export default SpecSheet
