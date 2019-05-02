import React from "react"
import { Link } from "gatsby"
import { graphql } from 'graphql'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {gh_repo_name}  from "../queries/cb_home_url.js"

console.log(gh_repo_name)

const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
  </Layout>
)

export default IndexPage