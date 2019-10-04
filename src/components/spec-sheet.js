import React, { useState } from "react"
import { Table, Box, TableCell, TableRow, TableBody } from "grommet"
import { graphql } from "gatsby"

const SpecSheet = props => {
  function displaySpecs(size) {
    console.log(size.items)
    return size.items.map((specs, index) => {
      return (
        <TableRow key={specs.spec_name.text}>
          <TableCell scope="row">
            <strong>{specs.spec_name.text}</strong>
          </TableCell>
          <TableCell>{specs.spec_value.text}</TableCell>
        </TableRow>
      )
    })
  }

  return (
    <Box pad="medium">
      <Table>
        <TableBody>{displaySpecs(props.size)}</TableBody>
      </Table>
    </Box>
  )
}

export default SpecSheet
