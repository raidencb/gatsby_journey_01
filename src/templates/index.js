import React, { Component } from "react";
import Link from "gatsby-link";
import Layout from "../components/layout"

import {gh_repo_name}  from "../queries/cb_home_url.js"

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    console.log(group)

    return (
      <Layout>
          <div>
              <h4>{pageCount} Pages</h4>

              {group.map(({ node }) => (
                  <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                      <Link to={gh_repo_name+'/post/' + node.slug}>
                          <h3>{node.title}</h3>
                      </Link>

                      <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                      {node.date}
                  </div>
              ))}
              <div className="previousLink">
                  <NavLink test={first} url={gh_repo_name+"/" + previousUrl} text="Go to Previous Page" />
              </div>
              <div className="nextLink">
                  <NavLink test={last} url={gh_repo_name+"/" + nextUrl} text="Go to Next Page" />
              </div>
          </div>
        </Layout>
    );
};
export default IndexPage;