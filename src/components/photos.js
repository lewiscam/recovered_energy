import React from "react"
import { Image } from "semantic-ui-react"

const Photos = props => {
  return (
    <>
      {props.photos.fields.map(field => {
        return (
          <Image
            fit="cover"
            src={field.product_size_image.url}
            alt={field.product_size_image.alt}
          />
        )
      })}
    </>
  )
}

export default Photos
