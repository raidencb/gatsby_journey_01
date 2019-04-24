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
    //const data_1 = data.allWordpressWpApiMenusMenusItems.edges.node.items
    //const item_menu = data.allWordpressWpApiMenusMenusItems.edges[0].node.items

     // const item_menu = data.allWordpressWpApiMenusMenusItems.edges[0].find(
     //    edge => edge.node.items === items
     //  )
    <div>
        <h1>Main Menu</h1>
        {console.log(data.allWordpressWpApiMenusMenusItems.edges[0].node.items)
         // const item_menu = data.allWordpressWpApiMenusMenusItems.edges[0].node.items
        }
    </div>
        )}
    />
);


export default MainMenu;﻿