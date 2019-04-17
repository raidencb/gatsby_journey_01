import React, { Component } from "react"
import { graphql } from "gatsby"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
        <div>

          <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />

          <div dangerouslySetInnerHTML={{__html: currentPage.content }} />

          <p dangerouslySetInnerHTML={{__html:currentPage.date}} />

        </div>
        
        
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        
      }
    }
  }
`