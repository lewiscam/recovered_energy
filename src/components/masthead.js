import React from "react"
import { Header, Button } from "semantic-ui-react"
import { Link } from "gatsby"

const Masthead = props => {
  return (
    <div className="ui inverted vertical masthead aligned segment">
      <div className="marketing-text">
        <Header as="h1">Boss Separators</Header>
        <p>
          We make really great stuff. We'll tell you a little bit about it here
        </p>
        <Link to="#">
          <Button content="Get a Quote" primary />
        </Link>
      </div>
    </div>
  )
}

export default Masthead
