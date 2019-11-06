/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import NumberBadge from "../components/shared/number-badge"
import moment from "moment"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Len = ({ len }) => {
  const dateMoment = moment(parseInt(len.relativeDirectory) * 1000)
  const dateMonth = dateMoment.format("MMMM YYYY")
  const dateDay = dateMoment.format("D")
  return (
    <article
      sx={{
        borderRadius: 1,
        marginTop: 2,
        bg: "background",
        color: "text",
      }}
    >
      <header sx={{ mb: 4 }}>
        <Styled.h3 sx={{ mb: 3, display: "flex" }}>
          <NumberBadge
            number={dateDay}
            size={[26, 35]}
            fontSize={["16px", "20px"]}
          />{" "}
          <span sx={{ ml: 2 }}>{dateMonth}</span>
        </Styled.h3>
        <p>Written by {len.childMdx.frontmatter.author}.</p>
      </header>
      <blockquote>
        <MDXRenderer>{len.childMdx.body}</MDXRenderer>
      </blockquote>
      <footer>
        <p>
          Read{" "}
          <a href={len.childMdx.frontmatter.url} target="__blank">
            {len.childMdx.frontmatter.title}
          </a>
        </p>
        <div
          sx={{
            marginRight: 2,
            marginBottom: 1,
          }}
        >
          <span>Tagged with: </span>
          <span>
            <i>{len.childMdx.frontmatter.tags.join(", ")}</i>
          </span>
        </div>
      </footer>
    </article>
  )
}

export default () => {
  const [, setColorMode] = useColorMode()
  setColorMode("lens")
  const {
    allFile: { nodes: lens },
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "lens" } }
        sort: { order: DESC, fields: relativeDirectory }
      ) {
        nodes {
          relativeDirectory
          childMdx {
            body
            frontmatter {
              tags
              author
              title
              url
            }
            fields {
              date
            }
            excerpt(pruneLength: 5000)
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Meta
        title="Lens"
        description="A reading list of articles and other links I use to inform my work, posted almost every weekday."
      />
      <Styled.h1>Lens</Styled.h1>

      <p>
        A reading list of articles and other links I use to inform my work,
        posted <i>almost</i> every weekday.
      </p>
      <Styled.p>
        You can subscribe to my lens{" "}
        <Styled.a href="/lens.xml">RSS feed</Styled.a>.
      </Styled.p>
      <div sx={{ mb: 6 }}>
        {lens.map((len, index) => (
          <Len len={len} key={index} />
        ))}
      </div>
    </Layout>
  )
}
