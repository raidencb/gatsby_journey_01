import React, {Component} from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"

import { StaticQuery, graphql } from "gatsby"


const MainMenu = () => (
    <StaticQuery query={graphql`
        query {
            allWordpressWpApiMenusMenusItems{
                edges{
                    node{
                        id
                        name
                        items{
                            title
                            url
                            object_slug
                        }
                    }
                }
            }
        }`
    } render={data => (
            <div>
                <h1>Main Menu</h1>
                <ul>
                {
                    data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                        <li key={item.object_slug}>
                            <Link to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        )}
    />
);


export default MainMenu;﻿