import React from "react"
import { Box, Carousel, Image, Anchor } from "grommet"

const Documentation = props => {
  console.log(props.size)
  return (
    <Box width="medium" pad="medium">
      {props.size.items.map(item => {
        return (
          <Anchor href={item.attachment.url}>{item.attachment.name}</Anchor>
        )
      })}
    </Box>
  )
}

export default Documentation
