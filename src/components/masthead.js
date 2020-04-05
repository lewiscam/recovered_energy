import React from "react"
import { Header, Button } from "semantic-ui-react"
import { Link, StaticQuery, graphql } from "gatsby"

const Masthead = props => (
  <StaticQuery
    query={graphql`
      query HomepageQuery {
        prismic {
          allHomepages {
            edges {
              node {
                title
                tagline
                call_to_action
                banner_img
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div
        className="ui vertical inverted masthead aligned segment"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${data.prismic.allHomepages.edges[0].node.banner_img.url})`,
          backgroundPosition: "center",
        }}
      >
        <div className="marketing-text">
          <Header as="h1">
            {data.prismic.allHomepages.edges[0].node.title.text}
          </Header>
          <p>{data.prismic.allHomepages.edges[0].node.tagline.text}</p>
          <Link to="#">
            <Button
              content={
                data.prismic.allHomepages.edges[0].node.call_to_action.text
              }
              primary
            />
          </Link>
        </div>
      </div>
    )}
  />
)

export default Masthead
