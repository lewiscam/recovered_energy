import React from "react"
import { Box, Carousel, Image } from "grommet"

const Photos = props => {
  console.log(props.size)
  return (
    <Box height="large" width="medium" pad="medium" overflow="hidden">
      <Carousel fill>
        {props.size.items.map(item => {
          return (
            <Image
              fit="cover"
              src={item.product_size_image.url}
              alt={item.product_size_image.alt}
            />
          )
        })}
      </Carousel>
    </Box>
  )
}

export default Photos
