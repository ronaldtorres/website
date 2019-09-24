import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Meta = ({ description, lang, meta, keywords, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const titleTemplate = title ? `%s | ${site.siteMetadata.title}` : `%s`
  const _title = title ? title : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={_title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: _title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@${site.siteMetadata.author}`,
        },
        {
          name: `twitter:title`,
          content: _title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

Meta.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [
    `ppinera`,
    `pedro pinera`,
    `ios developer`,
    `mobile developer`,
    `tuist`,
    `shopify`,
    `ruby`,
    `pedro piñera`,
  ],
}

export default Meta
