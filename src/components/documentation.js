import React from "react"
import { List } from "semantic-ui-react"

const Documentation = props => {
  return (
    <List>
      {props.documentation.fields.map(field => {
        return (
          <List.Item
            content={<a href={field.attachment.url}>{field.attachment.name}</a>}
          />
        )
      })}
    </List>
  )
}

export default Documentation
