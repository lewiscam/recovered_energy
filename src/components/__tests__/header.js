import React from "react"
import { shallow } from "enzyme"
import Header from "../header"
import { useStaticQuery } from "gatsby"
describe("Header", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementationOnce(() => ({
      allPrismicModel: {
        nodes: [
          {
            uid: "model1",
            data: {
              product_name: {
                text: "Model 1",
              },
            },
          },
        ],
      },
      allPrismicSystemCategory: {
        nodes: [
          {
            uid: "systemCat1",
            data: {
              system_category_title: {
                text: "System Category 1",
              },
            },
          },
        ],
      },
    }))
  })
  it("renders correctly", () => {
    const tree = shallow(<Header />)
    expect(tree).toMatchSnapshot()
  })
})
