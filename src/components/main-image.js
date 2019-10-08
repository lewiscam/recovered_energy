import React from "react"
import { Image } from "semantic-ui-react"

const MainImage = props => {
    console.log("main image", props.size.items[0].product_size_image)
  return (
    <Image
    size="medium"
    bordered
    floated="left"
      fit="cover"
      src={props.size.items[0].product_size_image.url}
      alt={props.size.items[0].product_size_image.alt}
    />
  )
}

export default MainImage
