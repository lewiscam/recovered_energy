import React from "react"
import { Image } from "semantic-ui-react"

const MainImage = props => {
  return (
    <Image
      size="medium"
      floated="left"
      fit="cover"
      src={props.image.fields[0].product_size_image.url}
      alt={props.image.fileds[0].product_size_image.alt}
    />
  )
}

export default MainImage
