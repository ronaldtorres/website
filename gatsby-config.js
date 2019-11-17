module.exports = {
  siteMetadata: {
    siteUrl: `https://ppinera.es`,
    title: `Pedro Piñera`,
    description: `Software Engineer at Shopify where I build tools for Mobile Developers (mostly in Ruby). I'm an open source who likes to share their experiences, learnings and work. When I'm not coding Ruby or Rails, you can find me playing with Swift.`,
    author: `pepibumur`,
    links: {
      github: "https://github.com/pepibumur",
      email: "mailto:pedro@ppinera.es",
      twitter: "https://twitter.com/pedropbuendia",
      linkedin:
        "https://www.linkedin.com/in/pedro-pi%C3%B1era-buendia-9765a9125/",
      soundcloud: "https://soundcloud.com/ppinera",
      spotify:
        "https://open.spotify.com/user/pepibumur?si=9fYZLPyuQOq368OoWop5rg",
      stackoverflow:
        "https://stackoverflow.com/users/963511/pedro-pi%c3%b1era-buendia",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/photos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/markdown/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lens`,
        path: "lens",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pedro Piñera`,
        short_name: `Pedro Piñera`,
        start_url: `/`,
        background_color: `#60b2d6`,
        theme_color: `#60b2d6`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  copyright: "2019 Pedro Piñera",
                  language: "en",
                  site_url: site.siteMetadata.siteUrl,
                })
              })
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  filter: { fields: { type: { eq: "blog-post" } } },
                  sort: { order: DESC, fields: [fields___date] }
                ) {
                  edges {
                    node {
                      body
                      fields {
                        slug
                        date
                      }
                      frontmatter {
                        title
                        excerpt
                      }
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "Pedro Piñera's Blog RSS Feed",
          },
          {
            serialize: ({ query: { site, allFile } }) => {
              return allFile.nodes.map(node => {
                return Object.assign({
                  title: new Date(
                    parseInt(node.relativeDirectory) * 1000
                  ).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }),
                  description: node.childMdx.excerpt,
                  guid: node.relativeDirectory,
                  copyright: "2019 Pedro Piñera",
                  language: "en",
                  site_url: site.siteMetadata.siteUrl,
                })
              })
            },
            query: `
            {
              allFile(
                filter: { sourceInstanceName: { eq: "micro-posts" } }
                sort: { order: DESC, fields: relativeDirectory }
              ) {
                nodes {
                  relativeDirectory
                  childMdx {
                    excerpt(pruneLength: 5000)
                  }
                }
              }
            }
            `,
            output: "/journal.xml",
            title: "Pedro Piñera's Journal RSS Feed",
          },
          {
            serialize: ({ query: { site, allFile } }) => {
              return allFile.nodes.map(node => {
                return Object.assign({
                  title: new Date(
                    parseInt(node.relativeDirectory) * 1000
                  ).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }),
                  description: node.childMdx.excerpt,
                  guid: node.relativeDirectory,
                  copyright: "2019 Pedro Piñera",
                  language: "en",
                  site_url: site.siteMetadata.siteUrl,
                })
              })
            },
            query: `
            {
              allFile(
                filter: { sourceInstanceName: { eq: "lens" } }
                sort: { order: DESC, fields: relativeDirectory }
              ) {
                nodes {
                  relativeDirectory
                  childMdx {
                    excerpt(pruneLength: 5000)
                  }
                }
              }
            }
            `,
            output: "/lens.xml",
            title: "Pedro Piñera's Lens RSS Feed",
          },
          {
            serialize: ({
              query: {
                site,
                allFile: { group: photos },
              },
            }) => {
              return photos.map(photo => {
                return Object.assign({
                  title: new Date(
                    parseInt(photo.nodes[0].dir) * 1000
                  ).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }),
                  description: photo.nodes[0].childMdx.excerpt,
                  guid: photo.nodes[0].dir,
                  copyright: "2019 Pedro Piñera",
                  language: "en",
                  site_url: site.siteMetadata.siteUrl,
                })
              })
            },
            query: `
            {
              allFile(
                filter: { sourceInstanceName: { eq: "photos" } }
                sort: { order: DESC, fields: dir }
              ) {
                group(field: dir) {
                  nodes {
                    dir
                    childMdx {
                      excerpt
                    }
                  }
                }
              }
            }
            `,
            output: "/photos.xml",
            title: "Pedro Piñera's Photos RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-theme-micro-blog`,
      options: {
        rootDir: __dirname,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "header-anchor",
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: "weirdpattern",
              includeDefaultCss: true,
            },
          },
          {
            resolve: `gatsby-remark-social-cards`,
            options: {
              type: "blog-post",
              title: {
                field: "title",
                font: "DejaVuSansCondensed",
                color: "white",
                size: 48,
                style: "bold",
                x: null,
                y: null,
              },
              meta: {
                parts: ["Pedro Piñera"],
                font: "DejaVuSansCondensed",
                color: "white",
                size: 24,
                style: "normal",
                x: null,
                y: null,
              },
              background: "#7149c1",
              xMargin: 24,
              yMargin: 24,
            },
          },
        ],
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
}
