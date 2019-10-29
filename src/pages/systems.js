import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Image, Grid} from "semantic-ui-react"
const Systems =  ({ data: { allPrismicModel } }) => {
  const allProducts = allPrismicModel.edges


const displayProduct =
 allProducts.map(product => {
     return (
       <Grid.Column className="main-container">
         <Link to={"/products/" + product.node.uid} key={product.node.uid}>
           <h2>{product.node.data.product_name.text}</h2>
           <Image src={product.node.data.model_feature_image.url} />
         </Link>
       </Grid.Column>
     )
 });

 ////// not using yet. still working on getting this to work ///////
// const currentSystemCategory =
// allProducts.filter(currentCategory =>
//     currentCategory.node.data.system_category.document[0].uid === window.history.state.item.uid
//     )





  return (
    <Layout>
      <Grid>
        <Grid.Row columns={4}>
      {displayProduct}
        </Grid.Row>
      </Grid>
    </Layout>
  )
}

export default Systems

export const systemsQuery = graphql`
         query getProducts {
           allPrismicModel {
             edges {
               node {
                 data {
                   model_feature_image {
                     url
                   }
                   product_name {
                     text
                   }
                   system_category {
                     document {
                       data {
                         system_category_title {
                           text
                         }
                       }
                     }
                   }
                 }
                 uid
               }
             }
           }
         }
       `



