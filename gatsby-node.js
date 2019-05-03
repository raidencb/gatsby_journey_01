const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const createPaginatedPages = require("gatsby-paginate")

const pageQuery = `
{
  allWordpressPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}
`

const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id
        slug
        status
        template
        format
        title
        date
      }
    }
  }
}
`


exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;


    return new Promise((resolve, reject) => {

        // Pages
        graphql(pageQuery)
            .then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                const pageTemplate = path.resolve("./src/templates/page.js");

                _.each(result.data.allWordpressPage.edges, edge => {
                    createPage({
                        path: `/${edge.node.slug}/`,
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    });
                });
            })

            .then(() => {
                graphql(postsQuery)
                    .then(result => {
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }

                        const postTemplate = path.resolve("./src/templates/post.js");

                        //const posts = result.data.allWordpressPost.edges

                        createPaginatedPages({
                            edges: result.data.allWordpressPost.edges,
                            createPage: createPage,
                            pageTemplate: 'src/templates/index.js',
                            pageLength: 2, // This is optional and defaults to 10 if not used
                            pathPrefix: '', // This is optional and defaults to an empty string if not used
                            context: {}, // This is optional and defaults to an empty object if not used
                        })
 

                        _.each(result.data.allWordpressPost.edges, edge => {
                            createPage({
                                path: `/post/${edge.node.slug}/`,
                                component: slash(postTemplate),
                                context: {
                                    id: edge.node.id,
                                },
                            });
                        });
                        // resolve();
                        // result.data.posts.edges.map(({ node }) => {
                        // createPage({
                        //       path: node.slug,
                        //       component: path.resolve('./src/templates/post.js'),
                        //       context: {
                        //         slug: node.slug,
                        //       },
                        //     })
                        // })
                        resolve()
                    });
            });
        // ==== END POSTS ====
    });
};