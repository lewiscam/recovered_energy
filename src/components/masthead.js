import React from "react"
import { Header, Button } from "semantic-ui-react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Masthead = props => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
      allPrismicHomepage {
        edges {
          node {
            data {
              title {
                text
              }
              tagline {
                text
              }
              call_to_action {
                text
              }
              banner_img {
                url
                alt
              }
            }
          }
        }
      }
    }
  `)
  const masthead = data.allPrismicHomepage.edges[0].node.data
  return (
    <div
      className="ui vertical inverted masthead aligned segment"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${masthead.banner_img.url})`,
        backgroundPosition: "center",
      }}
    >
      <div className="marketing-text">
        <Header as="h1">{masthead.title.text}</Header>
        <p>{masthead.tagline.text}</p>
        <Link to="#">
          <Button content={masthead.call_to_action.text} primary />
        </Link>
      </div>
    </div>
  )
}

export default Masthead
