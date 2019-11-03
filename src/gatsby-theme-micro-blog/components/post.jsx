/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ date, body, tags }) => {
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
        <Styled.h3 sx={{ mb: 3 }}>{date}</Styled.h3>
        <div
          sx={{
            marginRight: 2,
            marginBottom: 1,
          }}
        >
          <span>Tagged with: </span>
          <span>
            <i>{tags.join(", ")}</i>
          </span>
        </div>
      </header>
      <MDXRenderer>{body}</MDXRenderer>
      <footer sx={{ display: "flex", flexWrap: "wrap" }}></footer>
    </article>
  )
}
