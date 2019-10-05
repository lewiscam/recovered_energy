import React from "react"
import { List } from "semantic-ui-react"

const Documentation = props => {
  console.log(props.size)
  return (
    <List>
      {props.size.items.map(item => {
        console.log(item)
        return (
          <List.Item
            content={<a href={item.attachment.url}>{item.attachment.name}</a>}
          />
        )
      })}
    </List>
  )
}

export default Documentation
