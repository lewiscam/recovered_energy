import React from "react"
import { Table, Button } from "semantic-ui-react"

const SpecSheet = props => {
  function displaySpecs(specs) {
    return specs.fields.map((spec, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>
            <strong>{spec.spec_name[0].text}</strong>
          </Table.Cell>
          <Table.Cell>{spec.spec_value[0].text}</Table.Cell>
        </Table.Row>
      )
    })
  }

  return (
    <>
      <Button
        content="Print"
        icon="print"
        labelPosition="left"
        onClick={() => window.print()}
      />
      <Table>
        <Table.Body>{displaySpecs(props.specs)}</Table.Body>
      </Table>
    </>
  )
}

export default SpecSheet
