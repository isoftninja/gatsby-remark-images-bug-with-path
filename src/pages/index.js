import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  let html = data.remark.edges[ 0 ].node.html

  return (
    <Layout>
      <SEO title="Home"/>
      <div dangerouslySetInnerHTML={{__html:html}}></div>
    </Layout>
  )


}
export default IndexPage

export const pageQuery=graphql`
query{
  remark:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.*posts/\\[000\\]post/content\\.md/"}}) {
    edges {
      node {
        html
      }
    }
  }
}
`
