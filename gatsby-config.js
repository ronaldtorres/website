module.exports = {
  siteMetadata: {
    title: `Pedro Piñera`,
    description: `Software Engineer at Shopify where I build tools for Mobile Developers (mostly in Ruby). I'm an open source who likes to share their experiences, learnings and work. When I'm not coding Ruby or Rails, you can find me playing with Swift.`,
    author: `@pepibumur`,
    links: {
      github: "https://github.com/pepibumur",
      email: "mailto:pedro@ppinera.es",
      twitter: "https://twitter.com/pepibumur",
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/markdown`,
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
        icon: `src/images/avatar.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: "gatsby-remark-gemoji-to-image",
            // default options, can be ignored
            options: {
              base: "https://github.githubassets.com/images/icons/emoji/",
              ext: ".png",
              height: "1.2em",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
}
