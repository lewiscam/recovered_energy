import React from "react"

const Description = props => {
  return <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
}

export default Description
