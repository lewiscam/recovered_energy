import React from "react"
import { Paragraph } from "grommet"

const Description = props => {
  return (
    <Box pad="medium">
      <Paragraph
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></Paragraph>
    </Box>
  )
}

export default Description
