import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Menu, Dropdown } from "semantic-ui-react"
import Image from "./image"

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
      allPrismicSystemCategory {
        nodes {
          uid
          data {
            system_category_title {
              text
            }
          }
        }
      }
    }
  `)
  return (
    <header>
      <Menu primary>
        <Menu.Item>
          <Link to="/">
            <Image />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/about-us">About Us</Link>
          </Menu.Item>

          <Dropdown text="Products" className="link item">
            <Dropdown.Menu>
              {data.allPrismicModel.nodes.map((item, key) => (
                <Link to={"/products/" + item.uid} key={key}>
                  <Dropdown.Item key={key}>
                    {item.data.product_name.text}
                  </Dropdown.Item>
                </Link>
              ))}
            </Dropdown.Menu>
            //{" "}
          </Dropdown>
          <Menu.Item>
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
          <Dropdown text="Systems" className="link item">
            <Dropdown.Menu>
              {data.allPrismicSystemCategory.nodes.map((item, key) => (
                <Link to={"/systems/" + item.uid} key={key} state={{ item }}>
                  <Dropdown.Item key={key}>
                    {item.data.system_category_title.text}
                  </Dropdown.Item>
                </Link>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
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
