import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Menu, Dropdown } from "semantic-ui-react"
import Image from "./image"

const Header = () => (
  <StaticQuery
    query={graphql`
      query productNames {
        prismic {
          allModels {
            edges {
              node {
                _meta {
                  uid
                }
                product_name
              }
            }
          }
          allSystem_categorys {
            edges {
              node {
                _meta {
                  uid
                }
                system_category_title
              }
            }
          }
        }
      }
    `}
    render={data => (
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

            <Menu.Item>
              <Link to="/parts">Parts</Link>
            </Menu.Item>

            <Dropdown
              text="Products"
              className="link item"
              aria-label="Products"
            >
              <Dropdown.Menu>
                {data.prismic.allModels.edges.map((item, key) => (
                  <Link to={"/products/" + item.node._meta.uid} key={key}>
                    <Dropdown.Item key={key}>
                      {item.node.product_name[0].text}
                    </Dropdown.Item>
                  </Link>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
              <Link to="/contact">Contact Us</Link>
            </Menu.Item>
            <Dropdown text="Systems" className="link item" aria-label="Systems">
              <Dropdown.Menu>
                {data.prismic.allSystem_categorys.edges.map((item, key) => (
                  <Link
                    to={"/systems/" + item.node._meta.uid}
                    key={key}
                    state={{ item }}
                  >
                    <Dropdown.Item key={key}>
                      {item.node.system_category_title[0].text}
                    </Dropdown.Item>
                  </Link>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Link to="/cart">Cart</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </header>
    )}
  />
)

export default Header
