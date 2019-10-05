import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Menu, Dropdown } from "semantic-ui-react"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query productNames {
      allPrismicModel {
        nodes {
          uid
          data {
            product_name {
              text
            }
          }
        }
      }
    }
  `)
  return (
    <header>
      <Menu secondary>
        <Menu.Item>
          <Link to="/">{siteTitle}</Link>
        </Menu.Item>
        <Dropdown text="Products" className="link item">
          <Dropdown.Menu>
            {data.allPrismicModel.nodes.map((item, key) => (
              <Dropdown.Item key={key}>
                {console.log(item)}
                <Link to={"/products/" + item.uid} key={key}>
                  {item.data.product_name.text}
                </Link>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
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
