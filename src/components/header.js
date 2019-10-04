import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Heading } from "grommet"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query productNames {
      allPrismicModel {
        nodes {
          uid
        }
      }
    }
  `)
  return (
    <header
      style={{
        background: `#66bc7d`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Heading level={1} style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
          <Link
            to="/products"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Products
          </Link>
          {data.allPrismicModel.nodes.map((item, key) => (
            <Link to={"/products/" + item.uid} key={key}>
              {item.uid}
            </Link>
          ))}
        </Heading>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
