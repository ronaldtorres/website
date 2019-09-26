/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ date, body, tags }) => {
  return (
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
      <header sx={{ fontSize: 1, color: "primary" }}>{date}</header>
      <MDXRenderer>{body}</MDXRenderer>
      <footer sx={{ display: "flex", flexWrap: "wrap" }}>
        {tags.map((tag, index) => {
          return (
            <span
              sx={{
                fontSize: 1,
                marginRight: 1,
                marginBottom: 1,
                bg: "primary",
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
  )
}
