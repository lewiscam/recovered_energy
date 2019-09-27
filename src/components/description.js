import React from "react"
import { Paragraph } from "grommet"

const Description = props => {
  return (
    <Paragraph dangerouslySetInnerHTML={{ __html: props.content }}></Paragraph>
  )
}

export default Description
