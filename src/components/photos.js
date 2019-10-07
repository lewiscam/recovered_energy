import React from "react"
import { Image } from "semantic-ui-react"

const Photos = props => {
  return (
    <>
      {props.size.items.map(item => {
        return (
          <Image
            fit="cover"
            src={item.product_size_image.url}
            alt={item.product_size_image.alt}
          />
        )
      })}
    </>
  )
}

export default Photos
