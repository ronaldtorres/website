import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Meta from "../components/shared/meta"
import Helmet from "react-helmet"
import { Flex } from "rebass"
import {
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  EmailShareButton,
} from "react-share"
import {
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon,
} from "react-share"

export default ({ data }) => {
  const post = data.markdownRemark
  const url = `${data.site.siteMetadata.siteUrl}${
    data.markdownRemark.fields.slug
  }`
  const title = post.frontmatter.title
  const author = data.site.siteMetadata.author
  return (
    <Layout>
      <Meta
        title={title}
        keywords={post.frontmatter.tags}
        description={post.frontmatter.excerpt}
      />
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${data.site.siteMetadata.siteUrl}${
            data.markdownRemark.fields.slug
          }twitter-card.jpg`}
        />
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer />
      </article>
      <footer>
        <Flex flexDirection="row" justifyContent="center">
          <TelegramShareButton
            url={url}
            title={title}
            style={{ margin: "4px" }}
          >
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
          <TwitterShareButton
            url={url}
            title={title}
            via={author}
            style={{ margin: "4px" }}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            description={post.frontmatter.excerpt}
            style={{ margin: "4px" }}
          >
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <RedditShareButton url={url} title={title} style={{ margin: "4px" }}>
            <RedditIcon size={32} round={true} />
          </RedditShareButton>
          <EmailShareButton url={url} subject={title} style={{ margin: "4px" }}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </Flex>
      </footer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        tags
        excerpt
      }
    }
  }
`
