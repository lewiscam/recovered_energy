import React, { useState } from "react"
import { Table, TableHeader, TableCell, TableRow, TableBody } from "grommet"

const SpecSheet = () => {
  const [testArray, setTestArray] = useState([
    {
     
      spec: "Spec1",
      value: "Value1",
    },
    {
      
      spec: "Spec2",
      value: "Value2",
    },
    {
      
      spec: "Spec3",
      value: "Value3",
    },
  ])

  function displaySpecs(){
      return testArray.map((specs, index) => {
           return( <TableRow key={specs.spec}>
          <TableCell scope="row">
            <strong>{specs.spec}</strong>
          </TableCell>
          <TableCell>{specs.value}</TableCell>
        </TableRow>
      )})

  }
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Specification
          </TableCell>
          <TableCell scope="col" border="bottom">
            Specification Value
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
       {displaySpecs()}
        
      </TableBody>
    </Table>
  )
}

export default SpecSheet
