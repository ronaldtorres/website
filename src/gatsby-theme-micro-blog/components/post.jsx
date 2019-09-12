/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Styled } from "theme-ui"

export default ({ date, body, tags }) => {
  return (
    <Styled.root>
      <article
        sx={{
          borderRadius: 1,
          px: 4,
          py: 4,
          marginTop: 2,
          bg: "background",
          color: "text",
          borderColor: "muted",
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <header sx={{ fontSize: 1, color: "accent" }}>{date}</header>
        <MDXRenderer>{body}</MDXRenderer>
        <footer sx={{ display: "flex", flexWrap: "wrap" }}>
          {tags.map((tag, index) => {
            return (
              <span
                sx={{
                  fontSize: 1,
                  marginRight: 1,
                  marginBottom: 1,
                  bg: "accent",
                  color: "white",
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                }}
                key={index}
              >
                {tag}
              </span>
            )
          })}
        </footer>
      </article>
    </Styled.root>
  )
}
