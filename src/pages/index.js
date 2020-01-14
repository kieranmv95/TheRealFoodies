import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import styles from "./index.module.css"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className={styles.titleBlock}>
          <img src="logo.white.svg" className={styles.logo}/>
          <h1 className={styles.title}>The Real Foodies</h1>
          <p className={styles.insta}><a href="https://www.instagram.com/therealfoodiescouk/" target="_blank">@therealfoodiescouk</a></p>
          <img src="instaNameTag.png" className={styles.nameTag}/>
        </div>
        <div className={styles.body}>
          <h2>Welcome to The Real Foodies</h2>
          <p>We are Kieran &amp; Charlotte</p>
          <p>We live in the North West of the UK and like to eat good food</p>
          <p>Check out our instagram where we will be posting daily! We will soon be introducing a blog reviewing different meals and offering advice for cooking in general!</p>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
