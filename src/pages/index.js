import React from "react"
import { Link } from "gatsby"
import { graphql } from 'graphql'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   
  </Layout>
)

export default IndexPage