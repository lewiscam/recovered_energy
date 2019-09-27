import React, { useState } from "react"
import { Table, TableHeader, TableCell, TableRow, TableBody } from "grommet"
import { graphql } from "gatsby"

const SpecSheet = props => {
  const [testArray, setTestArray] = useState([
    {
      spec_name: "Spec1",
      spec_value: "Value1",
    },
    {
      spec_name: "Spec2",
      spec_value: "Value2",
    },
    {
      spec_name: "Spec3",
      spec_value: "Value3",
    },
  ])

  function displaySpecs() {
    return testArray.map((specs, index) => {
      return (
        <TableRow key={specs.spec_name}>
          <TableCell scope="row">
            <strong>{specs.spec_name}</strong>
          </TableCell>
          <TableCell>{specs.spec_value}</TableCell>
        </TableRow>
      )
    })
  }

  return (
    <Table>
      <TableBody>{displaySpecs(props.size)}</TableBody>
    </Table>
  )
}

export default SpecSheet
