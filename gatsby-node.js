/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require("slug")
const path = require(`path`)

// http://127.0.0.1:4000/2019/03/01/software-and-people.html

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    if (fileNode.relativePath.includes("posts")) {
      const filename = createFilePath({ node, getNode, basePath: `posts` })

      const [, date, title] = filename.match(
        /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
      )

      const slug = `/${slugify([date].join("-"), "/")}/${title}/`

      createNodeField({ node, name: `type`, value: "blog" })
      createNodeField({ node, name: `slug`, value: slug })
      createNodeField({ node, name: `date`, value: date })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allMarkdownRemark(filter: { fields: { type: { eq: "blog" } } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
